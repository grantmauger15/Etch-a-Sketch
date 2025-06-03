const container = document.querySelector("#container");

function getRandomColor() {
    color = [0, 0, 0];
    for(let i = 0; i < color.length; i++) {
        color[i] += Math.floor(Math.random() * 256);
    }
    return `rgb(${color.join()})`;
}

function colorCell(cell) {
    cell.style.backgroundColor = RGB ? getRandomColor() : 'black';
}

function generateGrid(size) {
    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flex = `0 0 ${100 / size}%`;
        container.appendChild(cell);
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            colorCell(e.target);
        });
    });
}
/*
let toggleDraw;
document.addEventListener('click', () => {
    toggleDraw = !toggleDraw;
})
*/

let RGB = false;
document.querySelector('#toggleRGB').addEventListener('click', () => {
    RGB = !RGB;
});

document.querySelector('#sizeButton').addEventListener('click', () => {
        let newSize = +prompt("Enter a new size value for the grid.");
        if(!newSize || !Number.isInteger(newSize) || newSize < 1) return;
        if(newSize > 100) {
            newSize = 100;
        }
        container.replaceChildren();
        generateGrid(newSize);
});

generateGrid(16);