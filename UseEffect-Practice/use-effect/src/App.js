import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  const [userData, setUserData] = useState([]); // userData는 객체를 담는 배열
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [registering, setRegistering] = useState(false); // 회원가입 상태 관리

  const submitUserData = (user) => {
    // user 객체를 인자로 받음( name, password )
    setUserData(...userData, user);
    setRegistering(false);
  };

  const registerHandler = () => setRegistering(true);
  const logoutHandler = () => setIsLoggedIn(false);
  const loginHandler = () => setIsLoggedIn(true);

  return (
    <>
      <Header
        onLogin={isLoggedIn}
        onRegister={registering}
        logoutHandler={logoutHandler}
        registerHandler={registerHandler}
      />
    </>
  );
};

export default App;
