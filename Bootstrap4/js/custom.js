{/* <div class="col">
    <div class="cardR">
    <img src="images/api/Union2.png" alt="" />
        <div class="cardR2">
            <h5>Pasta</h5>
        </div>
        <div class="cardR2">
            <h6>recips <i class="fas fa-arrow-right"></i></h6>
        </div>
    </div>
</div>
 */}


const print = function (data) {
    $(".rowq").append(`<div class="col">
              <div class="cardR">
                <img src="${data.Picture}" alt="logo" />
                <div class="cardR2"><h5>${data.Name}</h5></div>
                <div class="cardR2">
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
        for (var i = 0; i < 6; i++) {
            print(res[i])
        }
    })
}

