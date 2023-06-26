import * as baseVars from './basegame.js'

document.getElementById('saveButton').addEventListener("click", exportSave)

function exportSave(){
  document.getElementById('exportSaveSpace').innerHTML = String(baseVars.points) + "A" + String(baseVars.pointsPerClick) + "A" + String(baseVars.totalPointsPerClick) + "A" + baseVars.clickUpgradeCosts.toString() + "A" + baseVars.clickUpgradeBoosts.toString() + "A" + baseVars.clickUpgradeCostInc.toString() + "A" + String(baseVars.prestigeBonus1) + "A" + String(baseVars.prestigeMachines) + "A" + String(baseVars.prestigeBonusCost1)
}
