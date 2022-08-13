import React from "react";
import ErrorModalCss from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={ErrorModalCss.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card exCss={ErrorModalCss.modal}>
      <header className={ErrorModalCss.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={ErrorModalCss.content}>{props.contents}</div>
      <footer className={ErrorModalCss.actions}>
        <Button onClick={props.onClick}>OK!</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdropRoot")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          contents={props.contents}
          onClick={props.onClick}
        />,
        document.getElementById("overlayRoot")
      )}
    </>
  );
};

export default ErrorModal;
