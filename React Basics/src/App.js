import React ,{useState}from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tissue Paper",
    amount: 94.12,
    date: new Date(2023, 2, 15),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 800,
    date: new Date(2023, 2, 14),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 350,
    date: new Date(2023, 2, 20),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2023, 2, 19),
  },
];


const App = () => {
  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);  // pass dummy expenses to useState as an initial state value
 
  const addExpenseHandler = (expense) => { //get the data as a parameter from newExpense.js
   setExpenses((prevExpenses) => {        
    return[expense, ...prevExpenses];
   });  //we can use a spread operator as a array,here we adding new exepenses in existing expense
  };  

  return (
    //JSX Code for below code
    //      return React.createElement(
    //       'div',{no object}, 'no content',
    //       React.createElement('h2',{},"Let's get started"),
    //       React.cloneElement(Expenses ,{items: expenses})
    // );
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
