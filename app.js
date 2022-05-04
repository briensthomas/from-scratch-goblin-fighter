// import functions and grab DOM elements
const goblinForm = document.getElementById('goblin-form');
// let state
let goblinsDefeated = 0;

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
    // displayGoblinsList();
    goblinForm.reset();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

