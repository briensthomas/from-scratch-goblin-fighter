export function renderGoblinsList(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');

    const h2 = document.createElement('h2');
    h2.textContent = `${goblin.name}`;

    const h3 = document.createElement('h3');
    h3.textContent = `${goblin.hp} HP`;

    const img = document.createElement('img');
    img.src = goblin.img;

    div.append(h2, h3, img);
    return div;
}