import React from "react";

import classes from "components/UI/Button.module.css";

function Button({ children, type, onClick }) {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
