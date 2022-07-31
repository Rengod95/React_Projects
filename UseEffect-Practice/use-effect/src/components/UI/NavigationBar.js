import React from "react";
import NavCss from "./NavigationBar.module.css";
import Button from "./Button";

const NavigationBar = (props) => {
  const { onLogin, onRegister, logoutHandler, registerHandler, userName } =
    props;

  return (
    //로그인 상태에 따라 회원가입 or 로그아웃 버튼 출력
    <nav className={NavCss.nav}>
      <ul>
        <li>{onRegister && <h1>Registering</h1>}</li>
        <div>
          <li>
            {!onLogin && !onRegister && (
              <Button onClick={registerHandler}>Register</Button>
            )}
          </li>
        </div>
        {onLogin && <li>{`Hello! ${userName}`}</li>}
        {onLogin && (
          <Button onClick={logoutHandler} onDisabled={!onLogin}>
            LogOut
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
