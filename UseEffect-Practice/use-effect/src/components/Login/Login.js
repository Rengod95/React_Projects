import { React, useState } from "react";
import LoginCss from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {
  const { onRegister, loginSubmitHandler, registerSubmitHandler } = props;

  const [nameIsValid, setNameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const nameValidHandler = () => {
    setNameIsValid(enteredName.length > 6);
  };
  const passwordValidHandler = () => {
    setPasswordIsValid(enteredPassword.length > 6);
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
    nameValidHandler();
  };
  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    passwordValidHandler();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (onRegister) {
      registerSubmitHandler({ name: enteredName, password: enteredPassword });
    } else loginSubmitHandler({ name: enteredName, password: enteredPassword });
  };

  return (
    <Card className={LoginCss.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${LoginCss.control} ${
            !nameIsValid ? LoginCss.invalid : ""
          } `}
        >
          <label htmlFor="name">Username</label>
          <input
            id={"name"}
            type="text"
            value={enteredName}
            onChange={nameIsValid}
            onBlur={enteredNameHandler}
          />
        </div>
        <div
          className={`${LoginCss.control} ${
            !nameIsValid ? LoginCss.invalid : ""
          } `}
        >
          <label htmlFor="name">Password</label>
          <input
            id={"name"}
            type="text"
            value={enteredPassword}
            onChange={passwordIsValid}
            onBlur={enteredPasswordHandler}
          />
        </div>
        <div className={LoginCss.actions}>
          <Button
            type={"submit"}
            onClick={submitHandler}
            onDisabled={nameIsValid && passwordIsValid}
          >
            Submit!
          </Button>
        </div>
      </form>
    </Card>
  );
};
