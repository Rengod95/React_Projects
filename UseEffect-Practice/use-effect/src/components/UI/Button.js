import React from "react";
import ButtonCss from "./Button.module.css";

const Button = (props) => {
  const { type, onClick, exCss, onDisabled } = props;
  return (
    <button
      className={`${ButtonCss.button} ${exCss}`}
      type={type || "button"}
      onClick={onClick}
      disabled={onDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
