import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Auth-Context/auth-context";

const Home = () => {
  const authCTX = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCTX.onLogout}></Button>
    </Card>
  );
};

export default Home;
