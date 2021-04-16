import React from "react";

// Style
import "./Properties.scss";

const Properties = ({ style }) => {
  return (
    <div className="propertiesMenu" style={style}>
      <div className="propertiesMenu__content">
        <h3 className="propertiesMenu__content--title">Properties</h3>
        <p className="propertiesMenu__content--desc">
          Configure the image properties
        </p>
        <div className="propertiesMenu__content--sizeControl"></div>
      </div>
    </div>
  );
};

export default Properties;
