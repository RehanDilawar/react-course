import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2026",
    },
    {
      name: "Go To College",
      dueDate: "04/10/2026",
    },
    {
      name: "Play Cricket",
      dueDate: "04/10/2026",
    },
  ];
  const [todoItems,setTodoItems]=useState(initialTodoItems)
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
