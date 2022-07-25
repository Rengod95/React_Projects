import React from "react";
import NavCss from "./NavigationBar.module.css";
import Button from "./Button";

const NavigationBar = (props) => {
  const { onLogin, onRegister, logoutHandler, registerHandler } = props;

  return (
    //로그인 상태에 따라 회원가입 or 로그아웃 버튼 출력
    <nav className={NavCss.nav}>
      <ul>
        <li>{onRegister && <h1>Registering</h1>}</li>
        <li>
          {!onLogin && !onRegister && (
            <Button onClick={registerHandler}>Register</Button>
          )}
        </li>
        {onLogin && (
          <>
            <li>
              <a href="/">Logged In!</a>
            </li>
            <Button onClick={logoutHandler}>LogOut</Button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
