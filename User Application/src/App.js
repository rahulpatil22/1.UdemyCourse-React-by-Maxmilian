import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

 const [usersList,setUsersList]= useState([]);

 const addUserHandler = (uName ,uAge)=> {   //we get two values as param  //when the AddUser button is clicked then a function pass to on onAddUser(below),this function should be triggered
                                                   // we expect new data with this two parameter,,and with this data we create a new user and add it to out list by calling setUsersList and then updating state
  setUsersList((prevUsersList)=>{
  return [...prevUsersList,{name:uName ,age:uAge ,id : Math.random().toString()},];  //{uName,uAge}= new element ,js object ,which should have a name field,uName is the value we stored there and age field,which stores uAge as a value
  });                                             // and with this paramaters we treat a new js object for every user.and we add that to our UserList array
    //update the state by taking  the old list and appending a new element to it,when state update ,relies on previous state



 }

  return (
    // inside AddUser comp we need to utilise this OnAddUser prop.inside addUserHandler(in adduserComp),call props.onAddUser instead of console.log
    <div>
<AddUser onAddUser={addUserHandler}/>
<UserList users ={usersList}/>
    </div>
  );
}

export default App;
