export function renderGoblinsList(goblin) {
    const div = document.createElement('div');
    div.textContent = `${goblin.name} ${goblin.hp}`;
    return div;
}