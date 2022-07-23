import { useState } from "react";
import AddUserBoard from "./components/Users/AddUserBoard";
import TodoList from "./components/Users/TodoList";
import React from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const userDataHandler = (_name, _age, _text) => {
    setUserData((prev) => {
      return [...prev, { name: _name, age: _age, text: _text }];
    });
  };
  return (
    <>
      <AddUserBoard onSubmit={userDataHandler}></AddUserBoard>
      <TodoList userData={userData}></TodoList>
    </>
  );
}

export default App;
