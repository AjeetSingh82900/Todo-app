import Todoitem1 from "./Components/Todoitem1";

function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>
      <div class="container text-center">
        <Todoitem1></Todoitem1>
        
        
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col-4">
           16/12/2024
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
