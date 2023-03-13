import React from "react";
// import Todo from "../models/todo";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () =>
  //{ items: Todo[]; onRemoveTodo: (id:string) => void }instead we used conext
  //   props
  {
    const todosCtx = useContext(TodosContext);
    //items will be array of Todos based on that Todo class,which means items will be an
    // array of full of objects,that fullfil the descruption of this Todo class
    //full of objects that have an id , text property which is type of string
    return (
      <ul className={classes.todos}>
        {todosCtx.items.map(
          (
            item //instead of props used a todosCtx
          ) => (
            // <li key={item.id}>{item.text}</li>
            <TodoItem
              key={item.id}
              text={item.text}
              onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} //instead of props.onRemoveTodo call todosctx.removeTodo
            />
          )
        )}
      </ul>
    );
  };
export default Todos;
