function TodoItem1(){
  let TodoName="Buy Milk"
  let TodoDate="04/10/2026"
  return(
    <div class="container kg-row">
          <div class="row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            <b>Delete</b>
          </button>
        </div>
      </div>
      </div>
  )
}
export default TodoItem1;