let board = document.querySelector('.board');
board.style.gridTemplateColumns = ('16 , 1fr');
board.style.gridTemplateRows = ('16 , 1fr');


//256 is 16x16
//This portion creates our grid
for (let i = 0; i<256; i++) {
let square = document.createElement('div');
square.classList.add('square');
square.style.backgroundColor = 'blue';
board.insertAdjacentElement('beforeend', square);
/* square[i].addEventListeners(mouseenter, mouseleave, function() {
    if ('mouseenter') {
        return square.style.backgroundColor = 'light grey';
    } if ('mouseleave') {
        return square.style.backgroundColor = 'black';
    }
}); */
}

//Mousehover work
//Thought process: I need to develop an if/and statement in regards to what will happen when the mouse enters/exits each square.
//This process is almost working, currently producing a syntax error. Try and bring them together more cohesively.

for (let i = 0; i<256; i++) {
    square[i].addEventListeners(mouseenter, funciton(), {
        if (mouseenter) {
            return square.style.backgroundColor = ''
        }
    });
    square[i].addEventListeners(mouseleave, function() {
        if (mouseleave) {
            return square.style.backgroundColor = 'black'
        }
    });

/* board.addEventListener('mouseenter', mouseEnter);
board.addEventListener('mouseleave', mouseLeave);

 function mouseEnter() {
    let squareAll = document.querySelectorAll('square');
    alert(square.style.backgroundColor = 'light grey');
}
function mouseLeave() {
    let squareAll = document.querySelectorAll('square');
    alert(square.style.backgroundColor = '');
}

//if (eventtype === 'mouseover') {
    //event.target.style.backgroundColor = 'light grey';
//}
//if (eventtype === 'mouseout') {
    //event.target.style.backgroundColor = '';
//}



 */