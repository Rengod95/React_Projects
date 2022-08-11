import React, { useContext, useEffect, useReducer, useState } from "react";
import Button from "../components/UI/Button";
import classes from "./Login.module.css";
import { AuthContext } from "../../stores/auth-context";
import { Link } from "react-router-dom";

const defaultForm = { email: undefined, password: undefined };

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [formState, setFormState] = useState(defaultForm);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const emailInputHandler = (e) => {
    setFormState({ email: e.target.value, password: formState.password });
  };
  const passwordInputHandler = (e) => {
    setFormState({ email: formState.email, password: e.target.value });
    console.log(formState);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    authCtx.loginHandler(formState);
    setFormState(defaultForm);
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.form} ${classes.signInContainer}`}>
        <form onSubmit={loginSubmitHandler}>
          <h1>SIGN IN</h1>
          <div className={classes.socialContainer}>
            <a href="/client/src/view/pages"></a>
            <a href="/client/src/view/pages"></a>
          </div>
          <input
            type="email"
            placeholder={"User Email"}
            onChange={emailInputHandler}
          />
          <input
            type="password"
            placeholder={"Password"}
            onChange={passwordInputHandler}
          />
          <a href="/client/src/view/pages/Register">Forgot your password?</a>
          <Button type={"submit"}>SIGN IN</Button>
        </form>
      </div>
      <div className={classes.overlayContainer}>
        <div className={classes.overlay}>
          <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
            <h1>SIGN UP</h1>
            <p>Sign up here if you don't have account.</p>
            <Link to={"/register"}>
              <Button>SIGN UP</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
