import Button from "./Components/button";

function App() {
  return (
    <center class="todo-container">
      <Button></Button>
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
