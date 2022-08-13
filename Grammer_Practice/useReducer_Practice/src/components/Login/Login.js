import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Auth-Context/auth-context";

const inputReducer = (latestState, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      email: action.value,
      password: latestState.password,
      emailValidity: action.value.includes("@"),
      passwordValidity: latestState.passwordValidity,
    };
  } else if (action.type === "EMAIL_INPUT_BLUR") {
    return {
      email: latestState.email,
      password: latestState.password,
      emailValidity: latestState.email.includes("@"),
      passwordValidity: latestState.passwordValidity,
    };
  } else if (action.type === "PASSWORD_INPUT") {
    return {
      email: latestState.email,
      password: action.value,
      emailValidity: latestState.emailValidity,
      passwordValidity: action.value.length > 6,
    };
  } else if (action.type === "PASSWORD_INPUT_BLUR") {
    return {
      email: latestState.email,
      password: latestState.password,
      emailValidity: latestState.emailValidity,
      passwordValidity: latestState.password.length > 6,
    };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authCTX = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputState, dispatchInput] = useReducer(inputReducer, {
    email: "",
    password: "",
    emailValidity: undefined,
    passwordValidity: undefined,
  });

  const {
    emailValidity,
    passwordValidity,
    email: emailState,
    password: passwordState,
  } = inputState;

  useEffect(() => {
    const checker = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailValidity && passwordValidity);
    }, 500);
    return () => {
      console.log("CleanUp");
      clearTimeout(checker);
    };
  }, [emailValidity, passwordValidity]);

  const emailChangeHandler = (event) => {
    dispatchInput({ type: "EMAIL_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchInput({ type: "PASSWORD_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchInput({ type: "EMAIL_INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchInput({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCTX.onLogin(emailState, passwordState);
    console.dir(authCTX);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailValidity === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordValidity === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
