export default function Todoitem2(){

  let todoname='Go to Collage';
  let todoDate='12/03/2024';
  return (

    <div class="container text-center">
        <div class="row">
        <div class="row">
          <div class="col-6">
            {todoname}
          </div>
          <div class="col-4">
           {todoDate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
        </div>
        </div>
        </div>
  );
}