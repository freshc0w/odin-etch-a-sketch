/* Initial color is black pen */
let color = 'black'

/* Initialise board */

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove()) // Delete all squares before adding again.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare); // Mouseover effect
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    };
};

function setSize(input) {
    if (input >= 2 && input <= 100) {
    populateBoard(input);
    } else {
        console.log('Too many squares!')
    } 
};

populateBoard(16);

function colorSquare() {
    if (color === 'random') { //Provide random color to pen
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` 
    } else {
    this.style.backgroundColor = color;
    };
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}


 