import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
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
    console.log(`New item added :${itemName} and Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems)
  };
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item=> item.name !== todoItemName)
    setTodoItems(newTodoItems)
    console.log(`Item deleted : ${todoItemName}`)
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

export default App;
