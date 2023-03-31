import React from "react";
import Card from "components/UI/Card";
import classes from "components/Users/AddUsers.module.css";

function AddUser() {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add Users</button>
      </form>
    </Card>
  );
}

export default AddUser;
