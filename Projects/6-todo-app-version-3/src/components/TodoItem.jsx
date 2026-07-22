function TodoItem({TodoName, TodoDate}){
  return(
    <div className="container kg-row">
          <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            <b>Delete</b>
          </button>
        </div>
      </div>
      </div>
  )
}
export default TodoItem;