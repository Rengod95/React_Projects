import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
  // const isLoggedIn = undefined;

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/chat"} element={<Chat />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
