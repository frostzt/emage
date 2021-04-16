import React, { Fragment } from "react";
import { FileImageOutlined } from "@ant-design/icons";

// Components
import Button from "../Button/Button";
import Properties from "../Properties/Properties";

// Style
import "./ImageUploader.scss";

const ImageUploader = ({ handleFileUpload, handleSwitchAPI, isEmage }) => {
  return (
    <Fragment>
      <div className="uploadComponent__container">
        <h2 className="heading-secondary uploadComponent__container--title">
          Upload your image
        </h2>
        <h3 className="heading-tertiary uploadComponent__container--api">
          Where to upload?
        </h3>
        <div className="uploadComponent__container--choose">
          <div
            className={`choose-api uploadComponent__container--choose--emage ${
              isEmage ? "selected" : ""
            }`}
            onClick={handleSwitchAPI}
          >
            Emage
          </div>
          <div
            className={`choose-api uploadComponent__container--choose--imgur ${
              !isEmage ? "selected" : ""
            }`}
            onClick={handleSwitchAPI}
          >
            Imgur
          </div>
        </div>
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
          <Button style={{ marginTop: "1.5rem", marginBottom: "3rem" }}>
            Upload file
          </Button>
        </label>
        <input
          type="file"
          id="upload-btn"
          onChange={(e) => handleFileUpload(e)}
          style={{ display: "none" }}
        />
      </div>
    </Fragment>
  );
};

export default ImageUploader;
