import React from "react";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
import classes from "components/UI/ErrorModal.module.css";

function ErrorModal({ title, message, onConfirm }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
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
    </div>
  );
}

export default ErrorModal;
