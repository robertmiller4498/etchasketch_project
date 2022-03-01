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



