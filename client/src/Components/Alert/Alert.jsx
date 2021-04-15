import React from "react";
import {
  CloseOutlined,
  QuestionOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

// Style
import "./Alert.scss";

export const ErrorAlert = ({ message }) => {
  return (
    <div className="userAlert">
      <div className="userAlert__content">
        <div className="userAlert__content--icon">
          <CloseOutlined />
        </div>
        <div className="userAlert__content--message">{message}</div>
      </div>
    </div>
  );
};

export const InfoAlert = () => {
  return (
    <div className="userAlert">
      <div className="userAlert__content"></div>
    </div>
  );
};

export const AffirmAlert = () => {
  return (
    <div className="userAlert">
      <div className="userAlert__content"></div>
    </div>
  );
};
