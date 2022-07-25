import React from "react";
import NavigationBar from "./NavigationBar";
import HeaderCss from "./Header.module.css";

const Header = (props) => {
  const { onAuth, onLogout } = props;
  return (
    <header className={HeaderCss["mainHeader"]}>
      <h1>ToDo-List</h1>
      <NavigationBar onAuth={onAuth} onLogout={onLogout} />
    </header>
  );
};

export default Header;
