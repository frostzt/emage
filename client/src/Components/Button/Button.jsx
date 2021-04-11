import React from "react";

// Style
import "./Button.scss";

const Button = ({ children }) => {
  return (
    <div className="button">
      <div className="button__text">{children}</div>
    </div>
  );
};

export default Button;
