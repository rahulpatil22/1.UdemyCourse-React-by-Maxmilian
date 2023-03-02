import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  //here we reply on props to get our actual array of users as data

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} (
            {user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
