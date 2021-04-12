import React from "react";
import { FileImageOutlined } from "@ant-design/icons";

// Components
import Button from "../Button/Button";

// Style
import "./ImageUploader.scss";

const ImageUploader = ({ handleFileUpload }) => {
  return (
    <>
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
    </>
  );
};

export default ImageUploader;
