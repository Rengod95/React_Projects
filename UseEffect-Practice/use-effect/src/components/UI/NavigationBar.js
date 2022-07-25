import React from "react";
import NavCss from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const { onAuth, logoutHandler } = props;

  return (
    <nav className={NavCss.nav}>
      <ul>
        {onAuth && (
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <a href="">Detail</a>
            </li>
            <Button onClick={logoutHandler}>LogOut</Button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
