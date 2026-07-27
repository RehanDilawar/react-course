import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
const todoItemsReducer=(currTodoItems, action)=>{
  if (action.type==='NEW_ITEM'){
   const newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  }
  else if(action.type==='DELETE_ITEM')
  return[];
}
function App() {

  
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction={
      type: "NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction)


  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}
// Inspect With React Dev Tools
export default App;
