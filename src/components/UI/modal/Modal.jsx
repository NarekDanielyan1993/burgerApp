import React, { Fragment } from 'react';

import classes from "./modal.module.css";

const Backdrop = (props) => {
    return (
        <div onClick={props.click} className={classes.backdrop}>
            
        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    return <Fragment>
            <Backdrop click={props.click} />
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
}

export default Modal;
