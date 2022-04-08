import React from "react";

import classes from "./Userlist.module.css";
import Card from "../UI/Card.js";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random() * 100}>
            {user.name} ({user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
