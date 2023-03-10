import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //items will be array of Todos based on that Todo class,which means items will be an
  // array of full of objects,that fullfil the descruption of this Todo class
  //full of objects that have an id , text property which is type of string
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};
export default Todos;
