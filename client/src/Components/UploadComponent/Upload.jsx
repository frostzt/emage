import axios from "axios";
import React, { useState, useEffect } from "react";

// Components
import Loader from "../Loader/Loader";
import DropImage from "../DropImage/DropImage";
import ImageViewer from "../ImageViewer/ImageViewer";
import ImageUploader from "../ImageUploader/ImageUploader";

// Style
import "./Upload.scss";

const Upload = () => {
  const [data, setData] = useState();
  const [file, setFile] = useState("");
  const [isEmage, setIsEmage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  // Upload the file
  useEffect(() => {
    if (!!file) {
      if (!isEmage) {
        const config = {
          headers: {
            Authorization: "Client-ID 482011aecb8fad5",
          },
        };

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
        formData.append("format", "jpeg");
        formData.append("quality", 100);
        formData.append("width", 1000);
        formData.append("height", 1000);

        axios.post("http://localhost:5000/api/v1/image", formData, config).then(
          (res) => {
            console.log(res);
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
  }, [file]);

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
      <div className="uploadComponent">
        {isLoading ? (
          <Loader />
        ) : isUploaded ? (
          <ImageViewer data={data} />
        ) : (
          <ImageUploader
            setIsEmage={setIsEmage}
            isEmage={isEmage}
            handleFileUpload={handleFileUpload}
          />
        )}
      </div>
    </DropImage>
  );
};

export default Upload;
