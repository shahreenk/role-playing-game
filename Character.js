import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js';

// Constructor function that creates a new character object from the characterData
function Character(characterData) {
    Object.assign(this, characterData);
    this.diceHtml = getDicePlaceholderHtml(this.diceCount);
    this.maxHealth = this.health;
    this.setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount); // populates the object's currentDiceScore with values from a new dice roll
        this.diceHtml = this.currentDiceScore.map(roll => `<div class="dice">${roll}</div>`).join(''); // updates diceArray with new html using the currentDiceScore numbers
    }
    this.getCharacterHtml = function() {
        const {name, avatar, health, diceHtml} = this;
        const healthBar = this.getHealthBarHtml();
        return `<div class="character-card">
                    <h4 class="name"> ${name} </h4>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b>${health}</b></div>
                    ${healthBar}
                    <div class="dice-container">${diceHtml}</div>
                </div>`;
    }
    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((totalScore, currentScore) => totalScore + currentScore);
        this.health -= totalAttackScore;
        if(this.health <= 0) {
            this.dead = true;
            this.health = 0;
        }
    }
    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth);
        const dangerClass = percent < 26 ? 'danger' : '';
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${dangerClass}" style="width: ${percent}%"></div>
                </div>`
    }
}

export default Character;