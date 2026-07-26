import { MdAutoDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({TodoName, TodoDate}){
  const {deleteItem} = useContext(TodoItemsContext);
  return(
    <div className="container kg-row">
          <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" 
          onClick={()=>deleteItem(TodoName)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
      </div>
  )
}
export default TodoItem;