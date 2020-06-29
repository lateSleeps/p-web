
//edit bagian ini
const print = function (data) {
    $(".rowq").append(`<div class="col">
              <div class="card">
                <img src="${data.Picture}" alt="logo" />
                <div class="card2"><h5>${data.Name}</h5></div>
                <div class="card2">
                  <h6>recips <i class="fas fa-arrow-right"></i></h6>
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


