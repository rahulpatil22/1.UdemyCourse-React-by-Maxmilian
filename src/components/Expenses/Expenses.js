import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    //two way binding
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    //making below ExpenseItems Configurable from outside ,data should not store inside of them but recieve from outside
    // ExpenseFilter is controlled component beacuse we use two way binding here, we are controlling comp
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expeses={filterExpenses}/>
      <ExpensesList items={filterExpenses}/>
      
    </Card>
  );
};
export default Expenses;
