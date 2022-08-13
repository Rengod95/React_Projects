import React from "react";
import "./heartComponent.css";
const Button = (props) => {
  return (
    <>
      <button className="fowardButton" onClick={props.Click}></button>
    </>
  );
};

export default Button;
