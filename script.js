// Coding with Rob helped with sizing of board- video on YouTube

function populateBoard(size) {
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach(div => div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
};
//256 is 16x16


//This portion makes the etch-a-sketch functional
board.onmouseover = function(event) {
    let target = event.target;
    target.style.backgroundColor = "light grey";
}

board.onmouseout = function(event) {
    let target = event.target;
    target.style.backgroundColor = "black";
}
let input = document.getElementById("input").vaule; 
let size = input;
let amount = size * size;

//This portion creates our grid 
for(let i = 0; i < amount; i++) {
 let square = document.createElement('div');
 square.classList.add("square");
 square.style.backgroundColor = "blue";
 board.insertAdjacentElement("beforeend", square);
 }


populateBoard(16); 

function changeSize(input) {
    if((input >= 1) || (input <= 100)) {
        populateBoard(input);
    } else {
        return "Error! Input is not between 1-100";
    }
}


