import React from "react";
import mealImg from "../../assets/meals.jpg";
import HeaderCss from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const { onShowCart } = props;
  return (
    <>
      <header className={HeaderCss.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart}></HeaderCartButton>
      </header>
      <div className={HeaderCss["main-image"]}>
        <img src={mealImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
