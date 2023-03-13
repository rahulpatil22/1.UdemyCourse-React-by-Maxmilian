import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  //generic types defination
  items: Todo[];
  addTodo: (text: string) => void; //function type , returns nothing
  removeTodo: (id: string) => void; //function type ,returns nothing but,that get an argument of type string.
}; //type alias , define type once and use multiple times

export const TodosContext = React.createContext<TodosContextObj>({
  //create context want a default value,1 arg, it can be an object where we describe the shape of this todos context
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
//now we will create a context provider component,which will be responsible for managing that context state.

const TodosContextProvider: React.FC = (props) => {
  //here wanna return props children
  //in todoscontext provider wanna manage state for this context
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]; //its not array of string its a array of Todo object
  const [todos, setTodos] = useState<Todo[]>([]);
  //the kind of data managed by the state will be an array of todos.

  const addTodoHandler = (todoText: string) => {
    //it shouldn't return anything, so not here any return statement,but it should accept the parameter
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }; //in addTodohandler we manupulate todos array using state
  const removeTodoHandler = (todoID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoID);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }; //object of that above shape
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
