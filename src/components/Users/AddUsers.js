import React, { useState, useRef } from "react";
import ReactDom from "react-dom";

import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../helpers/Wrapper";

const AddUsers = (props) => {
  const enteredUsername = useRef();
  const enteredAge = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    const Username = enteredUsername.current.value;
    const Age = enteredAge.current.value;

    if (Username.trim().length === 0 || Age.trim().length === 0) {
      setError({
        title: "invalid input!",
        massege: "Please Enter a User Name and age.",
      });
      return;
    }
    if (+Age <= 0) {
      setError({
        title: "Age is invalid!",
        massege: "Please Enter a (>0) age.",
      });
      return;
    }

    props.saveValue(Username, Age);
    enteredUsername.current.value = "";
    enteredAge.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          massege={error.massege}
          error={(hideError) => {
            setError();
          }}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={enteredUsername}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={enteredAge}></input>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
