var points = 0
var pointsPerClick = 1
var clickUpgradeCostNum = 10
var clickUpgradeCostNum2 = 80
var clickUpgradeCostNum3 = 500

document.getElementById("showPoints").innerHTML = points
document.getElementById('clickingButton').addEventListener("click", baseClick)
document.getElementById("clickUpgradeCost").innerHTML = clickUpgradeCostNum
document.getElementById('upgradeButton').addEventListener("click", upgradeClick)
document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCostNum2
document.getElementById('upgradeButton2').addEventListener("click", upgradeClick2)
document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCostNum3
document.getElementById('upgradeButton3').addEventListener("click", upgradeClick3)

function roundVals()
{
    points = Math.round(100*points)/100
    pointsPerClick = Math.round(100*pointsPerClick)/100
    clickUpgradeCostNum = Math.round(100*clickUpgradeCostNum)/100
    clickUpgradeCostNum2 = Math.round(100*clickUpgradeCostNum2)/100
    clickUpgradeCostNum3 = Math.round(100*clickUpgradeCostNum3)/100
}
function baseClick(){
    points += pointsPerClick
    roundVals()
    document.getElementById("showPoints").innerHTML = points
}
function upgradeClick(){
    if(points >= clickUpgradeCostNum)
    {
        points = points - clickUpgradeCostNum
        clickUpgradeCostNum = clickUpgradeCostNum + 0.5 * clickUpgradeCostNum
        pointsPerClick = pointsPerClick + 1
        roundVals()
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
        roundVals()
        document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCostNum2
        document.getElementById("showPoints").innerHTML = points
    }
}
function upgradeClick3(){
    if(points >= clickUpgradeCostNum3)
    {
        points = points - clickUpgradeCostNum3
        clickUpgradeCostNum3 = clickUpgradeCostNum2 + 1 * clickUpgradeCostNum3
        pointsPerClick = pointsPerClick + 10
        roundVals()
        document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCostNum3
        document.getElementById("showPoints").innerHTML = points
    }
}
