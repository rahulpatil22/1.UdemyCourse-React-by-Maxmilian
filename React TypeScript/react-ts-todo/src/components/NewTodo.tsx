import { useRef } from "react";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //onAddTodo should be a type function.between the brackets() we would describe the parameters this function will get and after the
  // arrow we describe the return type of this function.in onAddTodo should not return anything,because when we call this function
  // we're not doing anything with the return value,we are not storing it in constant, we're not outputting it.hence there is a void
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    props.onAddTodo(enteredText); // we can pass pointers at functions as props to out components
    //onAddTodo is getting a function as a value,so we execute it as an function
  };
  //  ! and ? are regular operators when we are working with refs,which you can use in typescript, when you are working with values that could be null.
  //with ? mark you are always saying try to get me that value and if its null, store null in the constant or wherever i wanna store that value
  // with ! mark saying i am certain that here we wont be dealing with null, so therefore , drill into this object,into this property and give me the actaul stored non-null value
  // and therefore then you will always get that value.
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
