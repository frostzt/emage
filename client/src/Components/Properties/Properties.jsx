import React from "react";

// Style
import "./Properties.scss";

const Properties = ({
  style,
  quality,
  format,
  handleHeightChange,
  handleWidthChange,
  handleQualityChange,
  handleFormatChange,
}) => {
  return (
    <div className="propertiesMenu" style={style}>
      <div className="propertiesMenu__content">
        <h3 className="propertiesMenu__content--title">Properties</h3>
        <p className="propertiesMenu__content--desc">
          Configure the image properties, leave them empty if you don't want to
          change
        </p>
        <div className="propertiesMenu__content--sizeControl">
          <input
            type="number"
            placeholder="Height"
            onChange={handleHeightChange}
            className="propertiesMenu__content--sizeControl-height"
          />
          X
          <input
            type="number"
            placeholder="Width"
            onChange={handleWidthChange}
            className="propertiesMenu__content--sizeControl-width"
          />
        </div>
        <div className="propertiesMenu__content--qualityControl">
          <p className="propertiesMenu__content--qualityControl-title">
            Quality:
          </p>
          <input
            min={0}
            max={100}
            type="number"
            value={quality}
            onChange={handleQualityChange}
            className="propertiesMenu__content--qualityControl-value"
          />
        </div>
        <div className="propertiesMenu__content--formatControl">
          <p className="propertiesMenu__content--formatControl-title">
            Format:
          </p>
          <select
            value={format}
            onChange={handleFormatChange}
            className="propertiesMenu__content--formatControl-select"
          >
            <option value="jpeg">jpeg</option>
            <option value="png">png</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Properties;
