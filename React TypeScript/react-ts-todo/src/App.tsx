// import {useState} from 'react';  //if use context then no need of this state
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
// import Todo from "./models/todo";        //if use context then no need of this models

function App() {  //this content will used in a createContext and here we use a context
//   // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]; //its not array of string its a array of Todo object
// const [todos,setTodos] = useState<Todo[]>([]);
// //the kind of data managed by the state will be an array of todos.
  
//   const addTodoHandler = (todoText: string) => { //it shouldn't return anything, so not here any return statement,but it should accept the parameter
//     const newTodo = new Todo(todoText);
//     setTodos((prevTodos)=>{
//       return prevTodos.concat(newTodo);
//     });
//   }//in addTodohandler we manupulate todos array using state
//   const removeTodoHandler =(todoID:string)=>{
// setTodos((prevTodos)=>{
//   return prevTodos.filter(todo=>todo.id !== todoID);
// });
//   };
  return (
    //onAddTodo should now be added as a props, and value for that now be such a function with same shape as like onAddTodo function
    // <div>
    <TodosContextProvider >
      {/* <NewTodo onAddTodo={addTodoHandler}/> */}
      
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      <NewTodo/> 
      <Todos />
      </TodosContextProvider>
    // </div>
  );
}

export default App;
