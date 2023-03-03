import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef(); //hooks only usable inside functional comp,it take default value which we wanna initialise to, it return that value which allows us to work with that ref later
  const ageInputRef = useRef ();
//   const [enteredUsername, setEnteredUsername] = useState("");
//   //entereduser hold the current state(empty), and return latest state when state is update,setEntered hold the function which can call to change the state (usernameHandler)
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); //error state

  const addUserHandler = (event) => {
    const enteredName = nameInputRef.current.value; // ref is rarely use a manipulate the DOM, where is you just want to qickly read a value useRef 
    //and you want just read a value and never plan on chnaging anything,then you dont need a state because just to use state as keylogger
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        //set the error state
        title: "Invalid input",
        message: "Please Enter a Valid Name and Age(non-empty value).",
      });
      //validations
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        //set the error state
        title: "Invalid age",
        message: "Please Enter a Valid Age(> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge); //from app comp ,execute as a function here,bcoz i get as a value on that props will be a function,bcoz we passing a pointer at adduserhandler(app comp)
    // to onAddUser and AddUserhandler is a function,this wto para is get stored in adduser comp and we forward this data to the app component up on everyclick
    // setEnteredUsername("");
    // //reseting the logic with empty string, input space is cleared when form is submitted using value props in input ,which actually reflect the current state snapshot(empty)
    // // even if it is not change for keystroke,but upon a form submission.
    // setEnteredAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''; //reseting the logic using ref
  };

//   const usernameChangeHandler = (event) => {
//     //such events dispatch the object and with for more info and we can bind below to the input,for onChange prop.and
//     //tie with event listener(usernameChangeHandler) and the this function will trigger for everykeystroke in the every input elemet

//     setEnteredUsername(event.target.value); //call setEnteredusername, wanaa set it to what the user currently enetered and we can get thet enetered value with the help of that event object
//     //because there we can access the target of the event,which is the input and then the value property of that input to get the currently enetered value
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
  const errorHandler = () => {
    // for okay button on the modal ,this function triggered inside the error modal,bcoz button and backdrop is there ,for both we wanna click
    setError(null);
  };

  return (
    //wrapper element nothing return to the DOM. its just a one root component rendered to the DOM.code between the wrapper is adjucent elements
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
