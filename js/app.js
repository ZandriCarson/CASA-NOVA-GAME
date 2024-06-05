document.addEventListener("DOMContentLoaded", function() {
    showScreen('home-screen');
});

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function startGame() {
    showScreen('game-screen');
}

function playPoker() {
    showScreen('poker-screen');
}

function playSlots() {
    showScreen('slots-screen');
}

function managePepMines() {
    showScreen('pep-mines-screen');
}

function goHome() {
    showScreen('home-screen');
}

function goBackToGame() {
    showScreen('game-screen');
}

function drawPokerHand() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let hand = [];

    for (let i = 0; i < 5; i++) {
        const card = `${ranks[Math.floor(Math.random() * ranks.length)]} of ${suits[Math.floor(Math.random() * suits.length)]}`;
        hand.push(card);
    }

    document.getElementById('poker-hand').innerText = hand.join(', ');
}

function spinSlots() {
    const symbols = ['🍒', '🍋', '🍉', '🔔', '⭐'];
    let result = [];

    for (let i = 0; i < 3; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        result.push(symbol);
    }

    document.getElementById('slots-result').innerText = result.join(' | ');

    if (result[0] === result[1] && result[1] === result[2]) {
        alert("Jackpot! You win!");
    } else {
        alert("Try again!");
    }
}

let pepCount = 0;
let mineLevel = 1;

function collectPep() {
    pepCount += mineLevel;
    document.getElementById('pep-count').innerText = pepCount;
}

function upgradeMines() {
    if (pepCount >= 10 * mineLevel) {
        pepCount -= 10 * mineLevel;
        mineLevel++;
        document.getElementById('pep-count').innerText = pepCount;
        alert(`Mines upgraded to level ${mineLevel}`);
    } else {
        alert('Not enough pep to upgrade.');
    }
}
