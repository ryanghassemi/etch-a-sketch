const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel')
    container.appendChild(newDiv);
}