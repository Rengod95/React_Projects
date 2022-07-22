import React, { createContext, useState } from "react";

const newAccount = (accountInfo) => {
  const [userInput, setUserInput] = useState({
    inputId: "",
    inputPassword: "",
  });

  const registerHandler = (previous) => {
    setUserInput(...previous);
  };

  const accountData = createContext({});

  return {};
};
