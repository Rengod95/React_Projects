import React from "react";
import UserListCss from "./UserList.module.css";
import Card from "../UI/Card";

const TodoList = (props) => {
  return (
    <Card exCss={UserListCss.users}>
      <ul>
        {props.userData.map((value, idx) => {
          return (
            <li>
              <h3>Content : {value.text}</h3>
              <p>
                <h4>
                  Name : {value.name} | Date : {value.age}
                </h4>
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
