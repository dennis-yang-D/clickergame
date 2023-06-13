var points = 0;
var points per click = 0;

document.getElementById("showPoints").innerHTML = points
document.getElementById('pointCounter').addEventListener("click", baseClick)
function baseClick(){
    points += 1
    console.log(points)
    document.getElementById("counter").innerHTML = points
}
