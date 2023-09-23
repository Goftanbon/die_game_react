import React,{Component} from "react";

import "./Button_Box.css";

const Button_Box = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default Button_Box;