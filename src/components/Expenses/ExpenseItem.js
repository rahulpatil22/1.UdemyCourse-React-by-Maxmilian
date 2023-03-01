import React,{useState} from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const exepenseDate = new Date (2023, 2,20);  //when we define a props in app.js there is need of const declaration
  // const expenseTitle = 'Car Insurance' ;
  // const expenseAmount = 350;
//  const [title,setTitle] = useState (props.title) //yseState always returned array with two elements(title and setTitle)
  // let title = props.title    //this title holds the value we find in props title
                              // and then we use this title variable down there in jsx(h2)
  // const clickHandler = () =>{
  //   // title = 'Updated !';   //assigning a new value
  //   setTitle('');    //assigning a new value calling setTitle function and pass new value as arg
  //   console.log(title);
  

  return (
    // accesing define values(array) in app. js here using parameters, that parameter in every comp which we use as a component(Expenseitem) and that parameter which holds all the
    // recived attributes as properties(props),
    //props object is key value paired.
    //below classname have both expeses.js and expenseItem.js
    <li>
    <Card className="expense-item">
    
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>  
        <div className="expense-item_price">${props.amount}</div>
      </div>
     
    </Card>
    </li>
    // between card closing tag data is children props which passed to the Card.js
  );
}

export default ExpenseItem;



// import React from 'react';

// import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
// import './ExpenseItem.css';

// const ExpenseItem = (props) => {
//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
 // <button onClick={clickHandler}>Change Title</button> 
//     </Card>
//   );
// }

// export default ExpenseItem;
