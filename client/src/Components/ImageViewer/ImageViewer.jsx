import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckCircleFilled } from "@ant-design/icons";

// Style
import "./ImageViewer.scss";

// Components
import Button from "../Button/Button";

const ImageViewer = ({ data, reset }) => {
  return (
    <div className="imageViewer">
      <CheckCircleFilled className="imageViewer__icon" />
      <h3 className="heading-tertiary imageViewer__title">
        Uploaded successfully!
      </h3>
      <div className="imageViewer__container">
        <img
          src={data.link}
          alt="user-uploaded-img"
          className="imageViewer__container--image"
        />
      </div>
      <div className="imageViewer__input">
        <input
          disabled={true}
          type="text"
          className="imageViewer__input--link"
          value={data.link}
        />
        <CopyToClipboard text={data.link}>
          <Button classes="imageViewer__input--btn">Copy</Button>
        </CopyToClipboard>
      </div>
      <Button onClick={reset} classes="imageViewer__reset">
        Upload another image!
      </Button>
    </div>
  );
};

export default ImageViewer;
