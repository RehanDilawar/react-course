import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import "./App.css";
function App() {
  const todoItems = [
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
  return (
    <center className="todo-container">
      <TodoItems todoItems={todoItems}></TodoItems>
      <AppName />
      <AddTodo />
    </center>
  );
}

export default App;
