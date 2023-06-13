var points = 0;
var pointsPerClick = 1;
var clickUpgradeCostNum = 10;
var clickUpgradeCostNum2 = 80;

document.getElementById("showPoints").innerHTML = points
document.getElementById('clickingButton').addEventListener("click", baseClick)
document.getElementById("clickUpgradeCost").innerHTML = clickUpgradeCostNum
document.getElementById('upgradeButton').addEventListener("click", upgradeClick)
document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCostNum2
document.getElementById('upgradeButton2').addEventListener("click", upgradeClick2)

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
function upgradeClick2(){
    if(points >= clickUpgradeCostNum2)
    {
        points = points - clickUpgradeCostNum2
        clickUpgradeCostNum2 = clickUpgradeCostNum2 + 0.8 * clickUpgradeCostNum2
        pointsPerClick = pointsPerClick + 5
        document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCostNum2
        document.getElementById("showPoints").innerHTML = points
    }
}
