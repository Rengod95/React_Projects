import React from "react";
import "./heartComponent.css";

const Heart = (props) => {
  return (
    <>
      <body>
        <div className="box">
          <div className="heart"></div>
        </div>
        <button className="backButton" onClick={props.click}></button>
      </body>
    </>
  );
};

export default Heart;
