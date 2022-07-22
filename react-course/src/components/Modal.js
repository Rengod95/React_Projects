const Modal = function (props){
    const deleteConfirmHandler = () =>{
        props.onConfirm();

    }

    return(
    <div className={'modal'}>
        <p>Are you sure?</p>
        <button className={'btn btn--alt'} onClick={props.onCancel}>Cancel</button>
        <button className={'btn'} onClick={deleteConfirmHandler}>Confirm</button>
    </div>
    )
}

export default Modal;