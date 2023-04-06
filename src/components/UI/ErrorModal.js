import React from "react";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
import classes from "components/UI/ErrorModal.module.css";

function ErrorModal({ title, message }) {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
