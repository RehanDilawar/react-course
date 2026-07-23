import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange=(event)=>{
    settodoName(event.target.value)
  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value)
  }
  const handleAddButtonClicked=()=>{
    onNewItem(todoName, dueDate)
    setDueDate("");
    settodoName("");
  }
  return (
    <div className="container">
      <div className="row kg-row">
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
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <b>Add</b>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
