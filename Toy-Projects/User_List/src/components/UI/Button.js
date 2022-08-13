import ButtonCss from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={ButtonCss.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
