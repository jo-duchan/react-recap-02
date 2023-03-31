import React from "react";
import classes from "components/UI/Card.module.css";

function Card({ children, className }) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}

export default Card;
