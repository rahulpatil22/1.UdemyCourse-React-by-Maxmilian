class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    //objects created with this Todo class as a constructor function
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
export default Todo;
