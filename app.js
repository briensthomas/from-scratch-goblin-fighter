// import functions and grab DOM elements
import { renderGoblinsList, } from './utils.js';

const goblinForm = document.getElementById('goblin-form');
const goblinsListEl = document.querySelector('.goblins-list');
const goblinsDefeatedEl = document.querySelector('.defeated-span');

const playerHPEl = document.getElementById('player-health');
// let state
let playerHP = 10;
let goblinsDefeatedCount = 0;

let goblinsArray = [
    { name: 'Bob', hp: 5, },
    { name: 'Scorio the Defiler, the Abhorred, Unmaker of Joy', hp: 1, },
];
// set event listeners 
goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const goblinData = new FormData(goblinForm);

    let goblins = {
        name: goblinData.get('goblin-name') || `Goblin #${Math.floor(Math.random() * 1000)}`,
        hp: Math.ceil(Math.random() * 5),
    };
    goblinsArray.push(goblins);
    console.log('logging goblins', goblinsArray);
    displayGoblinsList();
    goblinForm.reset();
});

const displayGoblinsList = () => {
    goblinsListEl.textContent = '';

    for (let goblin of goblinsArray) {
        const goblinDiv = renderGoblinsList(goblin);
        goblinDiv.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinsListEl.append(goblinDiv);
    }
};

displayGoblinsList();

function goblinClickHandler(goblin) {
    console.log(`I am clicking on ${goblin.name}`);

    if (goblin.hp === 0) return;
    if (playerHP === 0) return;

    const playerHit = Math.random();
    if (playerHit < 1) {
        goblin.hp--;
        displayGoblinsList();
        alert(`You hit ${goblin.name} for 1 damage!`);

        if (goblin.hp === 0) {
            goblinsDefeatedCount++;
            goblinsDefeatedEl.textContent = goblinsDefeatedCount;
        }
    } else {
        alert('You missed the goblin!');
    }
    const goblinHit = Math.random();
    if (goblin.hp === 0) return;
    if (goblinHit < 1) {
        playerHP--;
        playerHPEl.textContent = playerHP;
        alert(`${goblin.name} hit you for 1 damage!`);
        
        if (playerHP === 0) {
            alert('Game Over :(');

        }
    } else {
        alert(`${goblin.name} tried to hit you, and missed!`);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


