import { getDiceRollArray } from './utils.js';

// Constructor function that creates a new character object from the characterData
function Character(characterData) {
    Object.assign(this, characterData);
    const {name, avatar, health, diceCount} = this;
    this.getCharacterHtml = function() {
        const diceHtml = this.getDiceHtml(diceCount);
        return `<div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatar}" />
                    <p class="health">health: <b> ${health} </b></p>
                    <div class="dice-container">${diceHtml}</div>
                </div>`;
    }
    this.getDiceHtml = (diceCount) => getDiceRollArray(diceCount).map(function(roll) {
        return `<div class="dice">${roll}</div>`;
    }).join('')
}

export default Character;