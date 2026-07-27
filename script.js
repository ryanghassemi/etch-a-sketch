const container = document.querySelector('#container');
const dimBtn = document.querySelector('#grid-size');
const blackBtn = document.querySelector('#black');
const rainBtn = document.querySelector('#rainbow');
const opacBtn = document.querySelector('#opacity');
const clrBtn = document.querySelector('#clear');
const rndBtn = document.querySelector('#round');
let round = false;
rndBtn.addEventListener('click', () => round = !round);
clrBtn.addEventListener('click', () => createGrid(dim));
let useOp = false;

opacBtn.addEventListener('click', () => useOp = !useOp);
let dim = 16
createGrid(dim);
dimBtn.addEventListener('click', () => {
    dim = prompt('enter a # from 1-100');
    while (dim < 1 || dim > 100) {
        dim = prompt('between 1-100 pls:)');
    }
    createGrid(dim);
    }
);

function createGrid(dim) {
    container.replaceChildren();
    for (let i = 0; i < dim ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel')
        let pWidth = `${640/dim}px`;
        let pHeight = `${640/dim}px`;
        let newCol = "black"; 
        let opacity;
        opacity = 0;
        blackBtn.addEventListener('click', () => newCol = "black");
        rainBtn.addEventListener('click', () => newCol = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`);
        newDiv.style.width = pWidth;
        newDiv.style.height = pHeight;
        
        container.appendChild(newDiv);
        
        newDiv.ondragstart = () => false;
        newDiv.addEventListener('mousedown', () => {
            newDiv.style.backgroundColor = newCol
            opacity += 0.1;
            if (!useOp) {
                opacity = 1
            }
            newOp = `${opacity}`;
            newDiv.style.opacity = newOp;
            if (round) {
                newDiv.classList.add("round");
            }            
        });
        newDiv.addEventListener('mouseenter', (event) => {
            if (event.buttons === 1) {
                newDiv.style.backgroundColor = newCol;
                opacity += 0.1;
                if (!useOp) {
                    opacity = 1
                }
                newOp = `${opacity}`;
                newDiv.style.opacity = newOp;
                if (round) {
                    newDiv.classList.add("round");
                }
            }
        });
    }
}
