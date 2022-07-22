import React from "react";
import "./App.css";
import { useState } from "react";
import Button from "./component/button";
import Heart from "./component/heartComponent";

function App() {
  const [afterClick, setAfterClick] = useState(false);

  const afterClickHandler = (props) => {
    setAfterClick(true);
  };
  const backClickHandler = (props) => {
    setAfterClick(false);
  };

  return (
    <React.Fragment>
      {!afterClick && <Button Click={afterClickHandler}></Button>}
      {afterClick && <Heart click={backClickHandler}></Heart>}
    </React.Fragment>
  );
}

export default App;
