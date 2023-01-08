/* Initialise board */
let board = document.querySelector('.board');

// Make 16 squares and for each square, make it 1/16th of the whole length
// // of the board.
board.style.gridTemplateColumns = 'repeat(16, 1fr)'; 
board.style.gridTemplateRows = 'repeat(16, 1fr)';

/* Initialise grid */
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement('beforeend', square);
};