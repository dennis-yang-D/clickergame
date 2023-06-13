var points = 0;
var pointsPerClick = 1;

document.getElementById("showPoints").innerHTML = points
document.getElementById('clickingButton').addEventListener("click", baseClick)
function baseClick(){
    points += pointsPerClick
    console.log(points)
    document.getElementById("showPoints").innerHTML = points
}
