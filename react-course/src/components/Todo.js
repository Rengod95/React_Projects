import {useState} from "react";
import Modal from './Modal'
import Backdrop from "./Backdrop";

const Todo = function (props) {
    const [modalState, setModalState] = useState(false);

    const openModalHandler = function(){
        setModalState(true);
    }

    const closeModalHandler = function(){
        setModalState(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className={'actions'}>
                <button className={'btn'} onClick={openModalHandler}>Delete</button>
            </div>
            {modalState && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalState && <Backdrop onClick={closeModalHandler}/>}
        </div>
    );
}

export default Todo;