import React, { useState,useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
  // if (storedUserLoggedInInformation === '1'){
  //   setIsLoggedIn(true);//without useEffect it will go into the infinityloop, whenever we call state function,this component function re-execute
  // } // and this would run again ,find 1,would set it again, useeffect allow us to control windows run

  useEffect(()=>{ //now this function is executed by react and after every comp re-evaluation,means whenever this comp function ran thereafter this useEffect will run
    //and if you then update the state here and comp will run again,but it will not just run after every comp evaluation,but only
    //if the dependencies here changed
    //now when the app starts for the first time,that will be the case,if this comp function runs for the very first time,beacuse app just started
    //then the dependencies are considered to have changed,beacuse you had no dependencies before you could say.
    //but once it ran for the first time,we have no dependencies but therefore of course they also did't change compared to the first execution cycle
    //so these anonymous function would indeed only run once when the app starts,beacuse thereafter dependencies never chnage,beacuse this here specofically has no dependencies 
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    } 

  },[]);  //first arg is function,second arg is array of dependencies
//we need dependencies ,because we dont just want to run this effect function once,when app start,but after every component re-evaluation,if certained dependecy changed
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn' ,'1')  //stored item

    setIsLoggedIn(true);  
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');   //remove item
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
