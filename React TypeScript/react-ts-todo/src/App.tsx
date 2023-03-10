import {useState} from 'react';
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]; //its not array of string its a array of Todo object
const [todos,setTodos] = useState<Todo[]>([]);
//the kind of data managed by the state will be an array of todos.
  
  const addTodoHandler = (todoText: string) => { //it shouldn't return anything, so not here any return statement,but it should accept the parameter
    const newTodo = new Todo(todoText);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
  }//in addTodohandler we manupulate todos array using state
  return (
    //onAddTodo should now be added as a props, and value for that now be such a function with same shape as like onAddTodo function
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      
      <Todos items={todos} />
    </div>
  );
}

export default App;
