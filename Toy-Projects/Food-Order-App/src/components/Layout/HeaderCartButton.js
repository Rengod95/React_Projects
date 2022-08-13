import CartIcon from "../Cart/CartIcon";
import HeaderCartCss from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={HeaderCartCss.button} onClick={props.onClick}>
      <span className={HeaderCartCss.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={HeaderCartCss.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
