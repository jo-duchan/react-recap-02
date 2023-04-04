import React from "react";

import AddUser from "components/Users/AddUsers";
import UsersList from "components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[{ name: "duchan", age: "33" }]} />
    </div>
  );
}

export default App;
