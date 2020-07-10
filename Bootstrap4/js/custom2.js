




const print = function (data) {

  var ing = data.Ingredients.forEach((e) => { var txt3 = document.createElement("p"); txt3.innerHTML = e; return txt3})
    $(".rowq").append(`<div class="col">
    <div class="card">
      <img src="${data.Picture}" alt="logo" />
      <div class="card2">
        <h5>${data.Name}</h5>
      </div>
      <div class="card2">
        <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
          <h6>recips <i class="fas fa-arrow-right"></i></h6>
        </button>
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
        role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">${data.Name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h4>Ingredients</h4>
              ${data.Ingredients}
              <hr>
              <h4>Steps</h4>
              <p>${data.Steps}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>`)

console.log(data)
}




window.onload = function () {   
    $.get('http://117.53.46.220:8086/recipes', (data, status) => {
        console.log(data.Value)
        var res = data.Value
        res.forEach(element => {
            print(element)
        });
    })
}


