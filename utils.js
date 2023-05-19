// Creates an array of random numbers with the length of diceCount
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random()*6) + 1);
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(`<div class="placeholder-dice"></div>`).join('');
}

const getPercentage = (remainingHealth, maxHealth) => remainingHealth / maxHealth * 100;

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage};