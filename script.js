const container = document.querySelector("#container");

function generateGrid(size) {
    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flex = `0 0 ${100 / size}%`;
        container.appendChild(cell);
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            if(!e.target.classList.contains("fill")) {
                e.target.classList.add("fill");
            }
        });
    });
}

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