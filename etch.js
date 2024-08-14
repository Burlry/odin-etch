const container = document.querySelector('#container');
const button = document.querySelector('button');

//if (size > 100 || size < 1) {
    //alert('Error, number invalid');
//} else {

    //container.style.height = containerSize + 'px';
    //container.style.width = containerSize + 'px';

    //for (let i = 0; i < area; i++) {
        //const squareDiv = document.createElement('div');
        //container.appendChild(squareDiv);
        //squareDiv.addEventListener('mouseenter', () => {
            //squareDiv.classList.add('current');
        //});
        //squareDiv.addEventListener('mouseleave', () => {
            //squareDiv.classList.remove('current');
        //})

//}}

button.addEventListener('click', () => {
    gridKill();
    let size = prompt('How many squares per side', 16);
    let area = (size * size);
    if (size > 100 || size < 1) {
        alert('Error, number invalid');
    } else {
        for (let i = 0; i < area; i++) {
            const squareDiv = document.createElement('div');
            squareDiv.style.height = (960 / size) + 'px';
            squareDiv.style.width = (960 / size) + 'px';
            squareDiv.setAttribute('class', 'currentGrid');
            squareDiv.style.backgroundColor = getColor();
            squareDiv.style.opacity = 0
            container.appendChild(squareDiv);
            squareDiv.addEventListener('mouseenter', () => {
                let currentOpacity = parseFloat(getComputedStyle(squareDiv).opacity);
                if (currentOpacity < 1) {
                    squareDiv.style.opacity = (currentOpacity + 0.1);
                }});
        //squareDiv.addEventListener('mouseleave', () => {
            //squareDiv.classList.remove('current');
        //})
}}});

function gridKill() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

function getColor() {
    const redValue = Math.floor(Math.random() * 255)
    const greenValue = Math.floor(Math.random() * 255)
    const blueValue = Math.floor(Math.random() * 255)
    let final = 'rgb('+redValue+', '+greenValue+', '+blueValue+')'
    return final;
}

