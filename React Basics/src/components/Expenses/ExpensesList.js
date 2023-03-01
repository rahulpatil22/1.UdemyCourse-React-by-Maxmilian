import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {


    let expenseContent = <p>No expense found.</p>  //hold this one otherwise below one

    if (props.items.length === 0) {                    
     return <h2 className="expenses-list_fallback"> found no expenses.</h2>
    }
     return <ul className="expenses-list">
     {
        props.items.map((expense) => (               //using for filter the value ,ternory operator
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
     }
     </ul>
};
export default ExpensesList;