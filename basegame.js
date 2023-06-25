var points = 0
var pointsPerClick = 1
var clickUpgradeCostNum = 10
var clickUpgradeCostNum2 = 80
var clickUpgradeCostNum3 = 500
var clickUpgradeCostNum4 = 25000
var clickUpgradeCostNum5 = 100000

const clickUpgradeCosts = [10,80,500,25000,100000];
const clickUpgradeBoosts = [1,5,10,50,100];

var prestigeBonus1 = 1
var prestigeMachines = 0
var prestigeBonusCost1 = 1000

var totalPointsPerClick = 1

document.getElementById("showPoints").innerHTML = points
document.getElementById("showPointsPerClick").innerHTML = totalPointsPerClick
document.getElementById('clickingButton').addEventListener("click", baseClick)
document.getElementById("clickUpgradeCost1").innerHTML = clickUpgradeCosts[0]
document.getElementById('upgradeButton').addEventListener("click", upgradeX(1))
document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCosts[1]
document.getElementById('upgradeButton2').addEventListener("click", upgradeX(2))
document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCosts[2]
document.getElementById('upgradeButton3').addEventListener("click", upgradeX(3))
document.getElementById("clickUpgradeCost4").innerHTML = clickUpgradeCosts[3]
document.getElementById('upgradeButton4').addEventListener("click", upgradeX(4))
document.getElementById("clickUpgradeCost5").innerHTML = clickUpgradeCosts[4]
document.getElementById('upgradeButton5').addEventListener("click", upgradeX(5))

document.getElementById("prestigeCost1").innerHTML = prestigeBonusCost1
document.getElementById('prestigeButton1').addEventListener("click", prestige1)

document.getElementById("numPrestigeMachines").innerHTML = prestigeMachines
document.getElementById("currentPrestigeBoost").innerHTML = prestigeBonus1

function roundVals()
{
    points = Math.round(100*points)/100
    totalPointsPerClick = pointsPerClick * prestigeBonus1
    totalPointsPerClick = Math.round(100*totalPointsPerClick)/100
    clickUpgradeCostNum = Math.round(100*clickUpgradeCostNum)/100
    clickUpgradeCostNum2 = Math.round(100*clickUpgradeCostNum2)/100
    clickUpgradeCostNum3 = Math.round(100*clickUpgradeCostNum3)/100
    document.getElementById("showPointsPerClick").innerHTML = totalPointsPerClick
}
function resetPrices()
{
    clickUpgradeCosts[0] = 10
    clickUpgradeCosts[1] = 80
    clickUpgradeCosts[2] = 500
    clickUpgradeCosts[3] = 25000
    clickUpgradeCosts[4] = 100000

    document.getElementById("clickUpgradeCost").innerHTML = clickUpgradeCosts[0]
    document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCosts[1]
    document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCosts[2]
    document.getElementById("clickUpgradeCost4").innerHTML = clickUpgradeCosts[3]
    document.getElementById("clickUpgradeCost5").innerHTML = clickUpgradeCosts[4]
}
/* function prestigeText(showText,buttonID,textID)
{
    document.getElementById("textID").innerHTML = showText
    document.getElementById("buttonID").innerHTML = "confirm"
} */

function baseClick(){
    points += totalPointsPerClick
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
        clickUpgradeCostNum3 = clickUpgradeCostNum3 + 1 * clickUpgradeCostNum3
        pointsPerClick = pointsPerClick + 10
        roundVals()
        document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCostNum3
        document.getElementById("showPoints").innerHTML = points
    }
}
function upgradeClick4(){
    if(points >= clickUpgradeCostNum4)
    {
        points = points - clickUpgradeCostNum4
        clickUpgradeCostNum4 = clickUpgradeCostNum4 + 1 * clickUpgradeCostNum4
        pointsPerClick = pointsPerClick + 50
        roundVals()
        document.getElementById("clickUpgradeCost4").innerHTML = clickUpgradeCostNum4
        document.getElementById("showPoints").innerHTML = points
    }
}
function upgradeClick5(){
    if(points >= clickUpgradeCostNum5)
    {
        points = points - clickUpgradeCostNum5
        clickUpgradeCostNum3 = clickUpgradeCostNum5 + 1 * clickUpgradeCostNum5
        pointsPerClick = pointsPerClick + 100
        roundVals()
        document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCostNum5
        document.getElementById("showPoints").innerHTML = points
    }
}

function upgradeX(num){
    if(points >= clickUpgradeCosts[num-1])
    {
        points = points - clickUpgradeCosts[num-1]
        clickUpgradeCosts[num-1] = clickUpgradeCosts[num-1] + 1 * clickUpgradeCosts[num-1]
        pointsPerClick = pointsPerClick + clickUpgradeBoosts[num-1]
        roundVals()
        document.getElementById("clickUpgradeCost" + num).innerHTML = clickUpgradeCosts[num-1]
        document.getElementById("showPoints").innerHTML = points
    }
}

function prestige1(){
    if(points >= prestigeBonusCost1)
    {
        points = 0
        prestigeBonusCost1 = prestigeBonusCost1 + 99 * prestigeBonusCost1
        pointsPerClick = 1
        prestigeBonus1 = prestigeBonus1 * 2
        prestigeMachines = prestigeMachines + 1
        roundVals()
        resetPrices()
        document.getElementById("prestigeCost1").innerHTML = prestigeBonusCost1
        document.getElementById("showPoints").innerHTML = points

        document.getElementById("numPrestigeMachines").innerHTML = prestigeMachines
        document.getElementById("currentPrestigeBoost").innerHTML = prestigeBonus1
    }
}
