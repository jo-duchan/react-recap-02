import React, { useState } from "react";
import Card from "components/UI/Card";
import Button from "components/UI/Button";
import ErrorModal from "components/UI/ErrorModal";
import classes from "components/Users/AddUsers.module.css";

function AddUser({ onAddUser }) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
