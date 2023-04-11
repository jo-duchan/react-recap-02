import React, { Fragment } from "react";
import ReactDom from "react-dom";

import Card from "components/UI/Card";
import Button from "components/UI/Button";
import classes from "components/UI/ErrorModal.module.css";

function Backdrop({ onConfirm }) {
  return <div className={classes.backdrop} onClick={onConfirm} />;
}

function ModalOverlay({ title, message, onConfirm }) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal({ title, message, onConfirm }) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
