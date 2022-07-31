import { useState } from "react";
import React from "react";
import LoginCss from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {
  // 로그인 폼
  const {
    onRegister,
    loginSubmitHandler,
    registerSubmitHandler,
    setRegistering,
    userList,
  } = props;

  const [nameIsValid, setNameIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const nameChangeHandler = () => {
    setNameIsValid(enteredName.trim().length < 3);
  };
  const passwordChangeHandler = () => {
    setPasswordIsValid(enteredName.trim().length < 3);
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 3 && enteredPassword.trim().length > 3
    );
  };
  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 3 && enteredName.trim().length > 3
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (onRegister && enteredName && enteredPassword) {
      registerSubmitHandler(enteredName, enteredPassword);
      setRegistering(false);
    } else {
      loginSubmitHandler(enteredName, enteredPassword);
    }
    setEnteredName("");
    setEnteredPassword("");
    setFormIsValid(false);
  };

  return (
    <>
      <Card className={LoginCss.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${LoginCss.control} ${
              nameIsValid === false ? LoginCss.invalid : LoginCss
            } `}
          >
            <label htmlFor="name">Username</label>
            <input
              id={"name"}
              type="text"
              value={enteredName}
              onChange={enteredNameHandler}
              onBlur={nameChangeHandler}
            />
          </div>
          <div
            className={`${LoginCss.control} ${
              passwordIsValid === false ? LoginCss.invalid : ""
            } `}
          >
            <label htmlFor="password">Password</label>
            <input
              id={"password"}
              type="password"
              value={enteredPassword}
              onChange={enteredPasswordHandler}
              onBlur={passwordChangeHandler}
            />
          </div>
          <div className={LoginCss.actions}>
            <Button
              type={"submit"}
              onClick={submitHandler}
              onDisabled={!formIsValid}
            >
              Submit!
            </Button>
          </div>
        </form>
      </Card>
      <Card className={LoginCss.login}>
        <ul>
          {userList.map((val, idx) => {
            return (
              <li
                key={val.name}
              >{`Name : ${val.name} Password : ${val.password}`}</li>
            );
          })}
        </ul>
      </Card>
    </>
  );
};

export default Login;
