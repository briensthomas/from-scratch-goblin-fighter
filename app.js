// import functions and grab DOM elements
import { renderGoblinsList, } from './utils.js';

const goblinForm = document.getElementById('goblin-form');
const goblinsListEl = document.querySelector('.goblins-list');
const goblinsDefeatedEl = document.querySelector('.defeated-span');

const adventurer = document.getElementById('adventurer');
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
    if (goblin.hp === 0) return;
    if (playerHP === 0) return;

    const playerHit = Math.random();
    if (playerHit > 0.5) {
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
    if (goblinHit > 0.5) {
        playerHP--;
        playerHPEl.textContent = playerHP;
        alert(`${goblin.name} hit you for 1 damage!`);
        
        if (playerHP === 0) {
            alert('Game Over :(');
            adventurer.classList.add('game-over');
        }
    } else {
        alert(`${goblin.name} tried to hit you, and missed!`);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


