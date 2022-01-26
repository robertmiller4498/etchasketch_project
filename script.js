
//This needs reviewing. It is generally correct but needs more direction.
function makeGrid() {
    const container = document.getElementById("container");

    for (let iRows = 0; iRows < 17; iRows++) {
        let myRow = document.createElement('div');
        myRow.id = 'row' + iRows;

        container.appendChild(myRow);
        let rowW = document.getElementById('row' + iRows);

    for (let jCells = 0; jCells <17; jCells++) {
        let myCells = document.createElement('div');
        myCells.id = 'cell' + jCells;

        rowW.appendChild(myCells);
    }
    }
 };

 makeGrid();

