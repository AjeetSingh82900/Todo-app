import Apptodo from './Components/Todobutton/Apptodo';

function App() {
  return (
    <center class="todo-container">
      <h1>Todo App</h1>
      <Apptodo />
      <div class="container text-center">
        
        
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
