import React from "react";
import Card from "../UI/Card";
import AddUsersCss from "./AddUsers.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = function (props) {
  const inputUsername = useRef();
  const inputAge = useRef();
  const [error, setError] = useState(undefined);

  const formSubmitHandler = function (event) {
    event.preventDefault();
    const userName = inputUsername.current.value;
    const userAge = inputAge.current.value;
    console.log(userName, userAge);
    if (
      userName.trim().length === 0 ||
      userAge.trim().length === 0 ||
      +userAge < 0
    ) {
      setError({
        title: "Invalid input",
        message: "please enter a valid input",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    inputUsername.current.value = "";
    inputAge.current.value = "";
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card externalCss={AddUsersCss.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id={"username"} type="text" ref={inputUsername} />
          <label htmlFor="age">Age(Years)</label>
          <input id={"age"} type="number" ref={inputAge} />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
