const container = document.querySelector("#container");

for(let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement('div');
    cell.setAttribute("class", "cell");
    container.appendChild(cell);
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
        if(!e.target.classList.contains("fill")) {
            e.target.classList.add("fill");
        }
    });
});