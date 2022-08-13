import React from "react";
import CardCss from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${CardCss.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
