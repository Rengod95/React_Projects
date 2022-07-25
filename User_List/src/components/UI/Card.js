import cardCss from "./Card.module.css";

const Card = function (props) {
  return (
    <div className={`${cardCss.card} ${props.externalCss}`}>
      {props.children}
    </div>
  );
};

export default Card;
