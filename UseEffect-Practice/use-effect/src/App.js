import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  const [userData, setUserData] = useState([]); // userData는 객체를 담는 배열
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [registering, setRegistering] = useState(false); // 회원가입 상태 관리
  const [loginUserName, setLoginUserName] = useState();
  const registerSubmitHandler = (_name, _password) => {
    // user 객체를 인자로 받음( name, password )
    setUserData((prev) => {
      return [...prev, { name: _name, password: _password }];
    });
    setRegistering(false);
  };

  const loginSubmitHandler = (_name, _password) => {
    userData.forEach((val) => {
      if (val.name === _name && val.password === _password) {
        setIsLoggedIn(true);
        console.log("SUCCESS!");
        setLoginUserName(_name);
      }
    });
  };

  const registerHandler = () => setRegistering(true);
  const logoutHandler = () => setIsLoggedIn(false);

  return (
    <>
      <Header
        onLogin={isLoggedIn}
        onRegister={registering}
        logoutHandler={logoutHandler}
        registerHandler={registerHandler}
        userName={loginUserName}
      />
      {!isLoggedIn && (
        <Login
          onRegister={registering}
          loginSubmitHandler={loginSubmitHandler}
          registerSubmitHandler={registerSubmitHandler}
          setRegistering={setRegistering}
          userList={userData}
        ></Login>
      )}
    </>
  );
};

export default App;
