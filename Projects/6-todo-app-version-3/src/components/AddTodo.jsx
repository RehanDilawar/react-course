import { useState } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange=(event)=>{
    settodoName(event.target.value)
  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value)
  }
  const handleAddButtonClicked=(event)=>{
    event.preventDefault(); 
    onNewItem(todoName, dueDate)
    setDueDate("");
    settodoName("");
  }
  return (
    <div className="container">
      <form className="row kg-row" 
            onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Entere Todo here" 
          value={todoName}
          onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date"
          value={dueDate} 
          onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
          >
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
