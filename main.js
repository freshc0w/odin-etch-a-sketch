/* Initial color is black pen */
let color = 'black';

let click = true;

/* Initialise board */
populateBoard(16);

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
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    } 
};


function colorSquare() {
    if (click) { // only color if user has clicked
        if (color === 'random') { //Provide random color to pen
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` 
        } else {
        this.style.backgroundColor = color;
        };
    };
};

function changeColor(choice) {
    color = choice;
};

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
};

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') { // Won't switch coloring mode if click on button
        click = !click // Detects click and will draw depending on the current state of click.
    if (click) {
        document.querySelector('.mode').textContent = "Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode : Not Coloring";
    }
    }
});

 