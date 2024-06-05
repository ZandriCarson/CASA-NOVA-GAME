let pepCount = 0;
let mineLevel = 1;
let passiveIncomeRate = 0;
let upgradeCost = 10;
let passiveIncomeCost = 50;

document.addEventListener("DOMContentLoaded", function() {
    updateUI();
    startPassiveIncome();
});

function collectPep() {
    pepCount += mineLevel;
    updateUI();
}

function upgradeMines() {
    if (pepCount >= upgradeCost) {
        pepCount -= upgradeCost;
        mineLevel++;
        upgradeCost = 10 * mineLevel;
        updateUI();
        showNotification(`Mines upgraded to level ${mineLevel}`);
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function upgradePassiveIncome() {
    if (pepCount >= passiveIncomeCost) {
        pepCount -= passiveIncomeCost;
        passiveIncomeRate++;
        passiveIncomeCost = 50 * passiveIncomeRate;
        updateUI();
        showNotification(`Passive income increased to ${passiveIncomeRate} pep/second`);
    } else {
        showNotification('Not enough pep to upgrade.');
    }
}

function updateUI() {
    document.getElementById('pep-count').innerText = pepCount;
    document.getElementById('upgrade-cost').innerText = upgradeCost;
    document.getElementById('passive-income-cost').innerText = passiveIncomeCost;
    document.getElementById('passive-income-rate').innerText = passiveIncomeRate;
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
