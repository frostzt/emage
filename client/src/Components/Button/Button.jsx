import React from "react";

// Style
import "./Button.scss";

const Button = ({ children, classes, ...otherProps }) => {
  return (
    <div className={`button ${classes ? classes : ""}`} {...otherProps}>
      <div className="button__text">{children}</div>
    </div>
  );
};

export default Button;
