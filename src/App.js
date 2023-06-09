import React, { useState } from "react";

import AddUser from "components/Users/AddUsers";
import UsersList from "components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (name, age) => {
    setUsersList((prev) => {
      return [{ name, age, id: Math.random().toString() }, ...prev];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
