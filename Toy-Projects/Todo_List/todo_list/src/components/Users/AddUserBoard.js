import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import AddUserBoardCss from "./AddUserBoard.module.css";

const AddUserBoard = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [errorState, setErrorState] = useState(false);

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const TextHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const errorHandler = () => {
    setErrorState(false);
  };

  const addHandler = (event) => {
    event.preventDefault();
    if (
      !enteredUsername.trim().length ||
      !enteredDate.trim().length ||
      !enteredText.trim().length ||
      +enteredDate < 0
    ) {
      setErrorState({
        title: "Invalid input",
        contents: "please enter a valid input",
      });
      return;
    }
    props.onSubmit(enteredUsername, enteredDate, enteredText);
    setEnteredDate(undefined);
    setEnteredText("");
    setEnteredUsername("");
  };

  return (
    <>
      {errorState && (
        <ErrorModal
          onClick={errorHandler}
          title={errorState.title}
          contents={errorState.contents}
        ></ErrorModal>
      )}
      <Card exCss={AddUserBoardCss.input}>
        <form onSubmit={addHandler}>
          <label htmlFor="username">Username</label>
          <input
            id={"username"}
            type="text"
            onChange={usernameHandler}
            value={enteredUsername}
          />
          <label htmlFor="date"></label>
          <input
            id={"date"}
            type="date"
            onChange={dateHandler}
            value={enteredDate}
          />
          <label htmlFor="Text">Todo Text</label>
          <input
            id={"Text"}
            type="text"
            onChange={TextHandler}
            value={enteredText}
          />
          <Button type={"submit"}>Submit!</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUserBoard;
