import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "04/10/2026",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "04/10/2026",
  //   },
  //   {
  //     name: "Play Cricket",
  //     dueDate: "04/10/2026",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentTodoItems)=>[
      ...currentTodoItems,
      { name: itemName, dueDate: itemDueDate },
    ])
  };
  const handleDeleteItem=(todoItemName)=>{
      const newTodoItems=todoItems.filter(item=> item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}
// Inspect With React Dev Tools
export default App;
