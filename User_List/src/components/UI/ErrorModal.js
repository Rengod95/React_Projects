import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const Modal = (props) => {
  return (
    <Card externalCss={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}></Backdrop>,
        document.getElementById("Backdrop-Root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onClick={props.onClick}
          title={props.title}
          message={props.message}
        ></Modal>,
        document.getElementById("Overlay-Root")
      )}
    </>
  );
};

export default ErrorModal;
