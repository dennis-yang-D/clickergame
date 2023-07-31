let points = 0
let pointsPerClick = 1
let totalPointsPerClick = 1

let clickUpgradeCosts = [10,80,500,25000,100000]
let clickUpgradeBoosts = [1,5,10,50,100]
let clickUpgradeCostInc = [0.4,0.8,1,2,3.5]

let prestigeBonus1 = 1
let prestigeMachines = 0
let prestigeBonusCost1 = 1000

let automaticMachines = 0
let automaticMachinesUnlock = false
let automaticMachinesCost = 1000

document.getElementById("showPoints").innerHTML = points
document.getElementById("showPointsPerClick").innerHTML = totalPointsPerClick
document.getElementById('clickingButton').addEventListener("click", baseClick)

document.getElementById("clickUpgradeCost1").innerHTML = clickUpgradeCosts[0]
document.getElementById('upgradeButton1').addEventListener("click", function() {
  upgradeX(1);
});

document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCosts[1]
document.getElementById('upgradeButton2').addEventListener("click", function() {
  upgradeX(2);
});

document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCosts[2]
document.getElementById('upgradeButton3').addEventListener("click", function() {
  upgradeX(3);
});

document.getElementById("clickUpgradeCost4").innerHTML = clickUpgradeCosts[3]
document.getElementById('upgradeButton4').addEventListener("click", function() {
  upgradeX(4);
});

document.getElementById("clickUpgradeCost5").innerHTML = clickUpgradeCosts[4]
document.getElementById('upgradeButton5').addEventListener("click", function() {
  upgradeX(5);
});

document.getElementById("prestigeCost1").innerHTML = prestigeBonusCost1
document.getElementById('prestigeButton1').addEventListener("click", prestige1)

document.getElementById("numPrestigeMachines").innerHTML = prestigeMachines
document.getElementById("currentPrestigeBoost").innerHTML = prestigeBonus1

function roundVals()
{
    points = Math.round(100*points)/100
    totalPointsPerClick = pointsPerClick * prestigeBonus1
    totalPointsPerClick = Math.round(100*totalPointsPerClick)/100
    clickUpgradeCosts[0] = Math.round(100*clickUpgradeCosts[0])/100
    clickUpgradeCosts[1] = Math.round(100*clickUpgradeCosts[1])/100
    clickUpgradeCosts[2] = Math.round(100*clickUpgradeCosts[2])/100
    clickUpgradeCosts[3] = Math.round(100*clickUpgradeCosts[3])/100
    clickUpgradeCosts[4] = Math.round(100*clickUpgradeCosts[4])/100
    document.getElementById("showPointsPerClick").innerHTML = totalPointsPerClick
}
function resetPrices()
{
    clickUpgradeCosts[0] = 10
    clickUpgradeCosts[1] = 80
    clickUpgradeCosts[2] = 500
    clickUpgradeCosts[3] = 25000
    clickUpgradeCosts[4] = 100000

    document.getElementById("clickUpgradeCost1").innerHTML = clickUpgradeCosts[0]
    document.getElementById("clickUpgradeCost2").innerHTML = clickUpgradeCosts[1]
    document.getElementById("clickUpgradeCost3").innerHTML = clickUpgradeCosts[2]
    document.getElementById("clickUpgradeCost4").innerHTML = clickUpgradeCosts[3]
    document.getElementById("clickUpgradeCost5").innerHTML = clickUpgradeCosts[4]
}

function baseClick(){
    points += totalPointsPerClick
    roundVals()
    document.getElementById("showPoints").innerHTML = points
}

function upgradeX(num){
    if(points >= clickUpgradeCosts[num-1])
    {
        points = points - clickUpgradeCosts[num-1]
        clickUpgradeCosts[num-1] = clickUpgradeCosts[num-1] + clickUpgradeCostInc[num-1] * clickUpgradeCosts[num-1]
        pointsPerClick = pointsPerClick + clickUpgradeBoosts[num-1]
        roundVals()
        document.getElementById("clickUpgradeCost" + num).innerHTML = clickUpgradeCosts[num-1]
        document.getElementById("showPoints").innerHTML = points
    }
}

function prestige1(){
    if(points >= prestigeBonusCost1)
    {
      if(confirm("Are you sure you want to prestige?")) {
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

        document.getElementsByClassName("autoDisplay")[0].style.display = 'block'
      }  
    }
}
