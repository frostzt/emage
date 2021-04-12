import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";

// Style
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <CloudUploadOutlined className="loader__icon" />
      <p className="loader__text">Uploading...</p>
    </div>
  );
};

export default Loader;
