import characterData from './data.js';
import Character from './Character.js';

let monstersArray = ['orc', 'demon', 'goblin'];
let isWaiting = false;

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]; // take the first item from monstersArray and extract its characterData
    return nextMonsterData ? new Character(nextMonsterData) : {}; // return a new monster character if monstersArray is not empty
 }

function attack() {
    if (!isWaiting) {
        wizard.setDiceHtml();
        monster.setDiceHtml();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();
        if (wizard.dead) {
            endGame();
        } 
        else if (monster.dead) {
            isWaiting = true;
            if (monstersArray.length) {
                setTimeout(() => {
                    monster = getNewMonster();
                    render();
                    isWaiting = false;
                }, 1500);
            }
            else {
                endGame();
            }
        }
    }   
}

function endGame() {
    isWaiting = true;
    const endMessage = wizard.health === 0 && monster.health === 0 ? 'No Victors - all creatures are dead' : wizard.health > 0 ? 'The Wizard Wins' : 'The monsters are Victorious';
    const endEmoji = wizard.health > 0 ? '🔮' : '☠️';
    setTimeout(() => {
        document.body.innerHTML = `<div class="end-game">
                                     <h2>Game Over</h2>
                                     <h3>${endMessage}</h3>
                                     <p class="end-emoji">${endEmoji}</p>
                                  </div>`; 
    }, 1500)
}

document.getElementById('attack-button').addEventListener('click', attack);

// Render each character card to the browser
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero); // create wizard character
let monster = getNewMonster(); // create monster character

render(); 