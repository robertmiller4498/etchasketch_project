var userInput = window.prompt("What size grid would you like?");

 function createGrid(userInput) {
 let board = document.querySelector(".board");
 board.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${userInput} , 1fr)`;
    
let amount = userInput * userInput;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    square.style.backgroundColor = "grey";
    board.insertAdjacentElement("beforeend", square);
};
    
board.onmouseover = function(event) {
    let target = event.target;
    target.style.backgroundColor = "light grey";
};
    
board.onmouseout = function(event) {
    let target = event.target;
    target.style.backgroundColor = "black";
};

};

createGrid(userInput);

//Function for button

let form = document.getElementById("form");
let boardReset = document.getElementsByClassName("board");
form.addEventListener('reset', boardReset);
function clearGrid () {
/* var userInput = window.prompt("What size grid would you like?"); */

 function createGrid(userInput) {
 let board = document.querySelector(".board");
 board.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${userInput} , 1fr)`;
    
let amount = userInput * userInput;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    square.style.backgroundColor = "grey";
    board.insertAdjacentElement("beforeend", square);
};
    
board.onmouseover = function(event) {
    let target = event.target;
    target.style.backgroundColor = "light grey";
};
    
board.onmouseout = function(event) {
    let target = event.target;
    target.style.backgroundColor = "black";
};

};

createGrid(userInput);
};


