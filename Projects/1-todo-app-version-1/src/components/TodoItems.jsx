import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems }) => {
  return (
    <div className="items-container">
      {TodoItems.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
