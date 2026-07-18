function TodoItem2() {
  let TodoName = "Go to College";
  let TodoDate = "04/10/2026";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            <b>Delete</b>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
