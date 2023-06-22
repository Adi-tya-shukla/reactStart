import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.className} type={props.type} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;