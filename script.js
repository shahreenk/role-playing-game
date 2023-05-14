import characterData from './data.js';
import Character from './Character.js';

// Create a new wizard and orc character
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

// Render each character card to the browser
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

render();