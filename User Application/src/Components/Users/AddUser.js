import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  //entereduser hold the current state(empty), and return latest state when state is update,setEntered hold the function which can call to change the state (usernameHandler)
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] =useState();   //error state

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({                                       //set the error state
            title:'Invalid input',
            message:'Please Enter a Valid Name and Age(non-empty value).'
        });
      //validations
      return;
    }
    if (+enteredAge < 1) {
        setError({                                       //set the error state
            title:'Invalid age',
            message:'Please Enter a Valid Age(> 0).'
        });
      return;
    }
    props.onAddUser(enteredUsername,enteredAge);  //from app comp ,execute as a function here,bcoz i get as a value on that props will be a function,bcoz we passing a pointer at adduserhandler(app comp)
                        // to onAddUser and AddUserhandler is a function,this wto para is get stored in adduser comp and we forward this data to the app component up on everyclick
    setEnteredUsername("");
    //reseting the logic with empty string, input space is cleared when form is submitted using value props in input ,which actually reflect the current state snapshot(empty)
    // even if it is not change for keystroke,but upon a form submission.
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    //such events dispatch the object and with for more info and we can bind below to the input,for onChange prop.and
    //tie with event listener(usernameChangeHandler) and the this function will trigger for everykeystroke in the every input elemet

    setEnteredUsername(event.target.value); //call setEnteredusername, wanaa set it to what the user currently enetered and we can get thet enetered value with the help of that event object
    //because there we can access the target of the event,which is the input and then the value property of that input to get the currently enetered value
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => { 
     // for okay button on the modal ,this function triggered inside the error modal,bcoz button and backdrop is there ,for both we wanna click
setError(null);
  }

  return (
    <div>
   {error && <ErrorModal title = {error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
