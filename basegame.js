var points = 0;
var pointsPerClick = 1;
var clickUpgradeCostNum = 10;

document.getElementById("showPoints").innerHTML = points
document.getElementById('clickingButton').addEventListener("click", baseClick)
document.getElementById("clickUpgradeCost").innerHTML = clickUpgradeCostNum
document.getElementById('upgradeButton').addEventListener("click", upgradeClick)

function baseClick(){
    points += pointsPerClick
    document.getElementById("showPoints").innerHTML = points
}
function upgradeClick(){
    if(points >= clickUpgradeCostNum)
    {
        points = points - clickUpgradeCostNum
        clickUpgradeCostNum = clickUpgradeCostNum + 0.5 * clickUpgradeCostNum
        pointsPerClick = pointsPerClick + 1
        document.getElementById("clickUpgradeCost").innerHTML = clickUpgradeCostNum
        document.getElementById("showPoints").innerHTML = points
    }
}
