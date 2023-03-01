import React , {useState}from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('')    //by using multipleState
    const [enteredAmount,setEnteredAmount] = useState('')   //state used for the storing the values
    const [enteredDate,setEnteredDate] = useState('')

// const [userInput,setUserInput] =useState ({              //by using single state
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:'',
//  })
// 1) const titleChangeHandler = (event) => {
//     setUserInput ({                        //here we depending on our previous state for updating the state,becuase we use one state instead three state aproach
//         ...userInput,                      // and we need to copy in other values so that we dont lose them and then just override one value with a new one
//         enteredTitle:event.target.value ,  //// updating state here consider oldest state for copying in values in key value paired
//     })
//      } ;                                      //whenever you update state and you depend on previous state you should not do like this,use alternative form
                                                 //you should use alterative of state updating function(setUserInput)

 //use below approach for state depends on the previus state
//   2) const titleChangeHandler = (event) => {                 //call setUserInput function and pass a function(anonymous arrow function) to it , it will be automatically executed by react 
//     setUserInput ((preState)=>{                              // and it will recieve the previous state(above useState object) snapshot for that state which you are calling the updating function
//     return {...preState,enteredTitle:event.target.value}      // it will return new state snapshot
//     });                      
// }                                               
// in many cases both will work fine 1 and 2 ,but imp is react shedules state updates, it doesnt perform                                                                                       
// them instantly  ,if you schedule lot of state updates at the same time, you could be dependent on outdated
//or incorrect state snapshot if you use 1 st approach ,in 2nd approach react will gauranty the state snapshot 
// is givesns 2 here in the inner function will always be the latest state snapshot,keeping all schedule updates in mind, its a safer way
  

const titleChangeHandler = (event) => {    //when user entered something we just cant call setEneterdTitle and pass event target value
        setEnteredTitle(event.target.value);   // cureently eneterd value as parameter, as arg to setEnterdTitle
    }                                          //this will be stored in our state
 
                                            
    const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); 
     } 

     const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value); 
    } 
    const submitHandler = (event)=> {
        event.preventDefault();      //this method handle manual submission of form otherwise submitting the form, browser send a request and reload the page
   
        const expenseData = {          //here we combined all that entered data creating exepenseData object
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
        };
        // console.log(expenseData);   // value in input form is used for two way binding
       props.onSaveExpenseData (expenseData);  //when we call OnsaveExpenseData we pass the expenseData which are generated above as arg and that the value which will recive as a parameter(enteredExpensedata) in NewExpense
        setEnteredTitle('');       //after submitting the form we can call setEnteredTitle and set this back to a empty string
        setEnteredAmount('');
        setEnteredDate('');
    };
                                             
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/> 
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2020-1-1" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense_actions">
      <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
