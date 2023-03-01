import React from "react";
import "../NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {  //accpeting the props from app.js parent to child
  const SaveExpenseDataHandler = (eneteredExpenseData) => { // we can call this function in child (exepenseform) and from there passing data as parameter and 
    const exepenseData = {                                  //and recieving the data from expenseform(exepenseData) as parameter a
                                //here we get our expensedata with object
      ...eneteredExpenseData, //and copy in the enteredexpensedata which we generate in expenseform into submithandler
      id: Math.random().toString(), //generating new id    // so that object(expensedata) pull out  all the key value pairs and add into this new object
    };
    // console.log(exepenseData);
    props.onAddExpense(exepenseData); //calling this parent comp function in child
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
