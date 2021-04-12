import React, { Fragment } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";

// Style
import "./Loader.scss";

const Loader = () => {
  return (
    <Fragment>
      <div className="loader">
        <CloudUploadOutlined className="loader__icon" />
        <p className="loader__text">Uploading...</p>
      </div>
      <div className="loader__rotator" />
    </Fragment>
  );
};

export default Loader;
