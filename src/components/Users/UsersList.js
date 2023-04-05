import React from "react";
import Card from "components/UI/Card";
import classes from "components/Users/UsersList.module.css";

function UsersList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
