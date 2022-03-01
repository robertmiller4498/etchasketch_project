let board = document.querySelector('.board');
board.style.gridTemplateColumns = ('16 , 1fr');
board.style.gridTemplateRows = ('16 , 1fr');


//256 is 16x16
//This portion creates our grid
for (let i = 0; i<256; i++) {
let square = document.createElement('div');
square.style.backgroundColor = 'blue';
board.insertAdjacentElement('beforeend', square);
}

//Mousehover work
//Thought process: I need to develop an if/and statement in regards to what will happen when the mouse enters/exits each square.
//This process is almost working, currently producing a syntax error. Try and bring them together more cohesively.

board.addEventListener('mouseenter', mouseEnter);
board.addEventListener('mouseleave', mouseLeave);

function mouseEnter() {
    document.getElementById(square).style.backgroundColor = 'light grey';
}
function mouseLeave() {
    document.getElementById(square).style.backgroundColor = 'black';
}




