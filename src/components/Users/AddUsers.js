import React from "react";

function AddUser() {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <from onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add Users</button>
    </from>
  );
}

export default AddUser;
