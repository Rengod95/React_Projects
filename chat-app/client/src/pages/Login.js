import React, { useContext, useReducer, useRef, useState } from "react";
import Button from "../components/UI/Button";
import classes from "./Login.module.css";
import AuthContext from "../asset/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const [formState, setFormState] = useState({
    email: undefined,
    password: undefined,
  });

  const emailInputHandler = (e) => {
    setFormState({ email: e.target.value, password: formState.password });
    console.log(formState);
  };
  const passwordInputHandler = (e) => {
    setFormState({ email: formState.email, password: e.target.value });
    console.log(formState);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    authCtx.loginHandler();
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.form} ${classes.signInContainer}`}>
        <form onSubmit={loginSubmitHandler}>
          <h1>SIGN IN</h1>
          <div className={classes.socialContainer}>
            <a href="/"></a>
            <a href="/"></a>
          </div>
          <input
            ref={emailRef}
            type="email"
            placeholder={"User Email"}
            onChange={emailInputHandler}
          />
          <input
            type="password"
            placeholder={"Password"}
            onChange={passwordInputHandler}
          />
          <a href="/register">Forgot your password?</a>
          <Button>SIGN IN</Button>
        </form>
      </div>
      <div className={classes.overlayContainer}>
        <div className={classes.overlay}>
          <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
            <h1>SIGN UP</h1>
            <p>Sign up here if you don't have account.</p>
            <Button>SIGN UP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
