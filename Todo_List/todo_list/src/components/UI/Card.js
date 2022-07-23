import React from "react";
import CardCss from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${CardCss.card} ${props.exCss}`}>{props.children}</div>
  );
};

export default Card;
