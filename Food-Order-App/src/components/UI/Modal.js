import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const portalDirection = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const { onCloseModal: onClick } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick}></Backdrop>,
        portalDirection
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDirection
      )}
    </>
  );
};

export default Modal;
