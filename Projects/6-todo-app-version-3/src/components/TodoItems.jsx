import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css"
const TodoItems = ({ todoItems }) => {
  return (
    <div className={css.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name} ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
