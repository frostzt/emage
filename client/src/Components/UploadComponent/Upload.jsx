import React from "react";

// Components
import Button from "../Button/Button";

// Style
import "./Upload.scss";

const Upload = () => {
  return (
    <div className="uploadComponent">
      <div className="uploadComponent__container">
        <h2 className="heading-secondary uploadComponent__container--title">
          Upload your image
        </h2>
        <p className="uploadComponent__container--subtitle">
          Image should be jpeg, png, ...
        </p>
        <p className="uploadComponent__container--or">or</p>
        <Button>Upload file</Button>
      </div>
    </div>
  );
};

export default Upload;
