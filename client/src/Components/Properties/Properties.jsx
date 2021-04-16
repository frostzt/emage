import React from "react";

// Style
import "./Properties.scss";

const Properties = ({
  style,
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
      </div>
    </div>
  );
};

export default Properties;
