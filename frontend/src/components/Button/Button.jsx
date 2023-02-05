import React from "react";
import "./Button.css";

const MyButton = ({ children }) => {
  return (
    <button className="myButton">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export default MyButton;
