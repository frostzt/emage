import React, { useState } from "react";
import { FileImageOutlined } from "@ant-design/icons";

// Components
import Button from "../Button/Button";
import DropImage from "../DropImage/DropImage";

// Style
import "./Upload.scss";

const Upload = () => {
  const [file, setFile] = useState("");

  const handleFileUpload = (e) => {
    if (e._reactName.toString() === "onChange") {
      setFile(e.target.files[0]);
    } else if (e._reactName.toString() === "onDrop") {
      setFile(e.dataTransfer.files[0]);
    }
  };

  console.log(file);

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
