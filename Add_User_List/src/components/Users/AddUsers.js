import Card from "../UI/Card";
import AddUsersCss from "./AddUsers.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUsers = function (props) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");

  const inputUsernameHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const formSubmitHandler = function (event) {
    event.preventDefault();
    if (
      inputUsername.trim().length === 0 ||
      inputAge.trim().length === 0 ||
      +inputAge < 0
    )
      return;
    console.log(inputUsername, inputAge);
    setInputUsername("");
    setInputAge("");
  };

  return (
    <Card externalCss={AddUsersCss.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id={"username"}
          type="text"
          value={inputUsername}
          onChange={inputUsernameHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id={"age"}
          type="number"
          value={inputAge}
          onChange={inputAgeHandler}
        />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
