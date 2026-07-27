const container = document.querySelector('#container');
const dimBtn = document.querySelector('#grid-size');
const blackBtn = document.querySelector('#black');
const rainBtn = document.querySelector('#rainbow');

createGrid(16);
dimBtn.addEventListener('click', () => {
    let dim = prompt('enter a #');
    while (dim < 0 || dim > 100) {
        dim = prompt('between 0-100 pls:)');
    }
    createGrid(dim);
    }
);

function createGrid(dim) {
    container.replaceChildren();
    for (let i = 0; i < dim ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel')
        let pWidth = `${600/dim}px`;
        let pHeight = `${600/dim}px`;
        let newCol = "black";
        blackBtn.addEventListener('click', () => newCol = "black");
        rainBtn.addEventListener('click', () => newCol = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`);
        newDiv.style.width = pWidth;
        newDiv.style.height = pHeight;
        container.appendChild(newDiv);
        newDiv.ondragstart = () => false;
        newDiv.addEventListener('mousedown', () => newDiv.style.backgroundColor = newCol);
        newDiv.addEventListener('mouseenter', (event) => {
            if (event.buttons === 1) {
                newDiv.style.backgroundColor = newCol;
            }
        });
    }
}
