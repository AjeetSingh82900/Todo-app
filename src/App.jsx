import Todoitem2 from "./Components/Todoitem2";

function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here"/>
          </div>
          <div class="col-4">
            <input type ="date"/>
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
            12/03/2015
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
        </div>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
