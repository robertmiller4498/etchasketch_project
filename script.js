let populateBoard = (size) => {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
     board.style.gridTemplateRows = `repeat('${size} , 1fr')`;
    
    let amount = value.onchange * value.onchange;
     
     for(let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.classList.add("square");
      square.style.backgroundColor = "blue";
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
    
   /*   let changeSize = () =>  {
        if ((size >= 1) || (size <= 100)) {
            return populateBoard;
        } else {
            return "Error! Please enter a number between 1 and 100.";
        }
    } */
    };
    
    const btn = document.querySelector(".btn");
    btn.addEventListener('click', (size) => {
        return populateBoard;
    });

