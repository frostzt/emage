import React, { useState } from "react";

// Style
import "./DropImage.scss";

const DropImage = ({ children, handleFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const fileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileUpload(e);
  };

  return (
    <div
      onDragOver={(e) => dragOver(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragLeave={(e) => dragLeave(e)}
      onDrop={(e) => fileDrop(e)}
      className="dropimage"
    >
      {isDragging ? (
        <div className="dropimage__draggingContainer">
          <p className="dropimage__draggingContainer--text">
            {"Drop anywhere to upload :)"}
          </p>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default DropImage;
