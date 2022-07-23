import React from "react";
import ButtonCss from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "submit"}
      className={ButtonCss.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
