import axios from "axios";
import React, { useState, useEffect } from "react";
import { FileImageOutlined } from "@ant-design/icons";

// Components
import Button from "../Button/Button";
import DropImage from "../DropImage/DropImage";

// Style
import "./Upload.scss";

const Upload = () => {
  const [file, setFile] = useState("");

  useEffect(() => {
    if (!!file) {
      const formData = new FormData();
      formData.append("myFile", file);

      async function sendFile() {
        const config = {
          headers: {
            Authorization: "Client-ID 482011aecb8fad5",
          },
        };

        const res = await axios.post(
          "https://api.imgur.com/3/image",
          file,
          config
        );
      }

      sendFile();
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
  const handleFileUpload = async (e) => {
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
  };

  return (
    <DropImage handleFileUpload={handleFileUpload}>
      <div className="uploadComponent">
        <div className="uploadComponent__container">
          <h2 className="heading-secondary uploadComponent__container--title">
            Upload your image
          </h2>
          <p className="uploadComponent__container--subtitle">
            Image should be jpeg, png, ...
          </p>
          <div className="uploadComponent__container--dnd">
            <FileImageOutlined className="uploadComponent__container--dnd--icon" />
            <p className="uploadComponent__container--dnd--text">
              Drag and drop your image here
            </p>
          </div>
          <p className="uploadComponent__container--or">or</p>
          <label htmlFor="upload-btn">
            <Button style={{ marginTop: "1.5rem" }}>Upload file</Button>
          </label>
          <input
            type="file"
            id="upload-btn"
            onChange={(e) => handleFileUpload(e)}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </DropImage>
  );
};

export default Upload;
