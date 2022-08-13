import React from "react";
import NavigationBar from "./NavigationBar";
import HeaderCss from "./Header.module.css";

const Header = (props) => {
  const { onLogin, onRegister, logoutHandler, registerHandler, userName } =
    props;
  return (
    <header className={HeaderCss.main}>
      <h1>ToDo-List</h1>
      <NavigationBar
        onLogin={onLogin} // 로그인 상태
        onRegister={onRegister} //회원가입 상태
        logoutHandler={logoutHandler} // 로그아웃 상태 변경 함수
        registerHandler={registerHandler}
        userName={userName}
      />
    </header>
  );
};

export default Header;
