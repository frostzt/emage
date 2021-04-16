import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";

// Components
import Loader from "../Loader/Loader";
import DropImage from "../DropImage/DropImage";
import ImageViewer from "../ImageViewer/ImageViewer";
import ImageUploader from "../ImageUploader/ImageUploader";
import Properties from "../Properties/Properties";

// Style
import "./Upload.scss";

const Upload = () => {
  const [data, setData] = useState();
  const [file, setFile] = useState("");
  const [isEmage, setIsEmage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  // Properties of the image controlled by Properties-Component
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState("jpeg");

  // Upload the file
  useEffect(() => {
    if (!!file) {
      if (!isEmage) {
        const config = {
          headers: {
            Authorization: "Client-ID 482011aecb8fad5",
          },
        };

        // To the API
        axios.post("https://api.imgur.com/3/image", file, config).then(
          (res) => {
            setData(res.data.data);
            setIsLoading(false);
            setIsUploaded(true);
          },
          (err) => {
            setIsLoading(false);
            console.error(err);
          }
        );
      } else {
        const formData = new FormData();

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        // Append all the needed properties
        formData.append("image", file);
        formData.append("format", format);
        formData.append("quality", quality);
        formData.append("width", width ? width : "default");
        formData.append("height", height ? height : "default");

        // To the API
        axios.post("http://localhost:5000/api/v1/image", formData, config).then(
          (res) => {
            setData(res.data);
            setIsLoading(false);
            setIsUploaded(true);
          },
          (err) => {
            setIsLoading(false);
            console.error(err);
          }
        );
      }
    }
  }, [file, isEmage]);

  // Handle changing the properties state
  const handleHeightChange = (value) => {
    return setHeight(() => value);
  };

  const handleWidthChange = (value) => {
    return setWidth(() => value);
  };

  const handleFormatChange = (value) => {
    return setFormat(() => value);
  };

  const handleQualityChange = (value) => {
    return setQuality(() => value);
  };

  // Handle switching the API
  const handleSwitchAPI = () => {
    return setIsEmage((prevState) => !prevState);
  };

  // Validate file type
  const validateFileType = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    if (e._reactName.toString() === "onChange") {
      if (!validateFileType(e.target.files[0])) {
        alert("File is not an image!");
        return;
      }
      setFile(e.target.files[0]);
    } else if (e._reactName.toString() === "onDrop") {
      if (!validateFileType(e.dataTransfer.files[0])) {
        alert("File is not an image!");
        return;
      }
      setFile(e.dataTransfer.files[0]);
    }
    setIsLoading(true); // Change the loading state
  };

  return (
    <DropImage handleFileUpload={handleFileUpload}>
      <div className={`uploadComponent ${isLoading ? "overflow-hidden" : ""}`}>
        {isLoading ? (
          <Loader />
        ) : isUploaded ? (
          <ImageViewer data={data} />
        ) : (
          <Fragment>
            <ImageUploader
              isEmage={isEmage}
              handleSwitchAPI={handleSwitchAPI}
              handleFileUpload={handleFileUpload}
            />
            {isEmage ? (
              <Properties
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "105%",
                }}
                setWidth={handleWidthChange}
                setFormat={handleFormatChange}
                setHeight={handleHeightChange}
                setQuality={handleQualityChange}
              />
            ) : null}
          </Fragment>
        )}
      </div>
    </DropImage>
  );
};

export default Upload;
