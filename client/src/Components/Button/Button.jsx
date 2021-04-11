import React from "react";

// Style
import "./Button.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button" {...otherProps}>
      <div className="button__text">{children}</div>
    </div>
  );
};

export default Button;
