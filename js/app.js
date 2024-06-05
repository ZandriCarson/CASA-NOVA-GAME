let pepCount = 0;
let mineLevel = 1;
let passiveIncomeRate = 0;
const baseUpgradeCost = 10;
const upgradeGrowthFactor = 1.15;
const basePassiveIncomeCost = 50;
const passiveGrowthFactor = 1.25;
const doubleCollectionCost = 500;
const autoCollectorCost = 750;
const tripleCollectionCost = 2000;
const pepMultiplierCost = 3000;

document.addEventListener("DOMContentLoaded", function() {
    updateUI();
    startPassiveIncome();
});

function collectPep() {
    pepCount += mineLevel;
    updateUI();
    checkUnlocks();
}

function upgradeMines() {
    const upgradeCost = baseUpgradeCost * Math.pow(upgradeGrowthFactor, mineLevel);
    if (pepCount >= upgradeCost) {
        pepCount -= upgradeCost;
        mineLevel++;
        updateUI();
        showNotification(`Mines upgraded to level ${mineLevel}`);
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function upgradePassiveIncome() {
    const passiveIncomeCost = basePassiveIncomeCost * Math.pow(passiveGrowthFactor, passiveIncomeRate);
    if (pepCount >= passiveIncomeCost) {
        pepCount -= passiveIncomeCost;
        passiveIncomeRate++;
        updateUI();
        showNotification(`Passive income increased to ${passiveIncomeRate} pep/second`);
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function doubleCollection() {
    if (pepCount >= doubleCollectionCost) {
        pepCount -= doubleCollectionCost;
        mineLevel *= 2;
        updateUI();
        showNotification('Pep collection doubled!');
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function autoCollector() {
    if (pepCount >= autoCollectorCost) {
        pepCount -= autoCollectorCost;
        setInterval(collectPep, 1000);
        updateUI();
        showNotification('Auto Collector activated!');
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function tripleCollection() {
    if (pepCount >= tripleCollectionCost) {
        pepCount -= tripleCollectionCost;
        mineLevel *= 3;
        updateUI();
        showNotification('Pep collection tripled!');
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function pepMultiplier() {
    if (pepCount >= pepMultiplierCost) {
        pepCount -= pepMultiplierCost;
        mineLevel *= 5;
        updateUI();
        showNotification('Pep collection multiplied!');
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function updateUI() {
    document.getElementById('pep-count').innerText = formatNumber(pepCount);
    document.getElementById('upgrade-cost').innerText = formatNumber(baseUpgradeCost * Math.pow(upgradeGrowthFactor, mineLevel));
    document.getElementById('passive-income-cost').innerText = formatNumber(basePassiveIncomeCost * Math.pow(passiveGrowthFactor, passiveIncomeRate));
    document.getElementById('double-collection-cost').innerText = formatNumber(doubleCollectionCost);
    document.getElementById('auto-collector-cost').innerText = formatNumber(autoCollectorCost);
    document.getElementById('triple-collection-cost').innerText = formatNumber(tripleCollectionCost);
    document.getElementById('pep-multiplier-cost').innerText = formatNumber(pepMultiplierCost);
    document.getElementById('passive-income-rate').innerText = formatNumber(passiveIncomeRate);
}

function startPassiveIncome() {
    setInterval(() => {
        pepCount += passiveIncomeRate;
        updateUI();
    }, 1000);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function checkUnlocks() {
    if (pepCount >= 500) {
        document.querySelectorAll('.tier-2').forEach(item => item.style.display = 'block');
    }
    if (pepCount >= 2000) {
        document.querySelectorAll('.tier-3').forEach(item => item.style.display = 'block');
    }
}

function formatNumber(num) {
    if (num >= 1.0e+12) {
        return (num / 1.0e+12).toFixed(2) + " Terapep";
    } else if (num >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(2) + " Gigapep";
    } else if (num >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(2) + " Megapep";
    } else if (num >= 1.0e+3) {
        return (num / 1.0e+3).toFixed(2) + " Kilopep";
    } else {
        return num.toFixed(2);
    }
}
