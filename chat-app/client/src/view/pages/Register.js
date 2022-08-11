import React, { useRef, useState } from "react";
import classes from "./Register.module.css";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { AuthContext } from "../../stores/auth-context";

const Register = () => {
  const authCtx = useContext(AuthContext);
  const [registerData, setRegisterData] = useState({});
  const formRefer = useRef();

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formRefer.current);
  };

  return (
    <div className={classes.user}>
      <header className={classes.user__header}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
          alt=""
        />
      </header>
      <form
        className={classes.form}
        ref={formRefer}
        onSubmit={registerSubmitHandler}
      >
        <div className={classes.formNo}>
          <input type="text" placeholder="Name" className={classes.formInput} />
        </div>
        <div className={classes.formNo}>
          <input
            type="text"
            placeholder="NickName"
            className={classes.formInput}
          />
        </div>
        <div className={classes.form__group}>
          <input
            type="email"
            placeholder="Email"
            className={classes.formInput}
          />
        </div>
        <div className={classes.form__group}>
          <input
            type="password"
            placeholder="Password"
            className={classes.formInput}
          />
        </div>
        <Button className={classes.btn} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
