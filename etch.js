const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.textContent = 'Number ' + (i + 1);
    container.appendChild(squareDiv);

}

