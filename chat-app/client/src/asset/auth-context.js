import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

const URL = "http://localhost:3000/";

const defaultContext = {
  // 컨텍스트 훅 사용을 위한 스탠다드 객체 탬플릿
  isLoggedIn: undefined,
  loginUserStatus: {},
  loginHandler: (_loginUserStatus) => {},
  logoutHandler: () => {},
  registerHandler: (registerUserStatus) => {},
};

const defaultUserStatus = {
  // json 기본 형식 (유저)
  name: undefined,
  nickname: undefined,
  password: undefined,
  email: undefined,
  symbol_id: undefined,
};

const registerForm = {
  name: undefined,
  nickname: undefined,
  password: undefined,
  email: undefined,
  symbol_id: undefined,
};

export const AuthContext = createContext(defaultContext);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [loginUserStatus, setLoginUserStatus] = useState(defaultUserStatus); // 유저 정보에 대한 상태

  const registerHandler = (registerUserStatus) => {
    axios
      .post(URL, {
        headers: "REGISTER_VALIDITY",
        content: registerUserStatus,
        validity: undefined,
      })
      .then((res) => {
        if (res.data.validity) {
          setIsLoggedIn(res.data.validity);
          setLoginUserStatus(registerUserStatus);
        }
        console.log(res, res.data);
      })
      .catch((error) => console.log(error));
  };

  const logoutHandler = () => {
    setLoginUserStatus(defaultUserStatus);
    setIsLoggedIn(false);
  };

  const loginHandler = (_loginUserStatus) => {
    axios
      .post(URL, {
        headers: "LOGIN_VALIDITY",
        content: _loginUserStatus,
        validity: 0,
      })
      .then((res) => {
        if (res.data.validity) {
          setIsLoggedIn(res.data.validity);
          setLoginUserStatus(res.data.user); // user객체 전달받아야 함
        }
        console.log(res, res.data);
      })
      .catch((error) => console.log(error));
  };

  const dynamicContext = {
    isLoggedIn: isLoggedIn,
    loginUserStatus: loginUserStatus,
    logoutHandler: logoutHandler,
    loginHandler: loginHandler,
    registerHandler: registerHandler,
  };

  return (
    <AuthContext.Provider value={dynamicContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
