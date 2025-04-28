// Grid Functionality
const rows = 100;
const cols = 26;

// Populate Row Headers
let addressColContainer = document.querySelector(".address-col-container");
for (let i = 0; i < rows; i++) {
  let addressColCell = document.createElement("div");
  addressColCell.setAttribute("class", "address-col-cell");
  addressColCell.innerText = i + 1;
  addressColContainer.appendChild(addressColCell);
}

// Populate Column Headers
let addressRowContainer = document.querySelector(".address-row-container");
for (let i = 0; i < cols; i++) {
  let addressRowCell = document.createElement("div");
  addressRowCell.setAttribute("class", "address-row-cell");
  addressRowCell.innerText = String.fromCharCode(65 + i);
  addressRowContainer.appendChild(addressRowCell);
}

// Populate Grid
let cellsContainer = document.querySelector(".cells-container");
for (let i = 0; i < rows; i++) {
  let rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "row");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    rowContainer.appendChild(cell);
    addListnerForCellAddressDisplay(cell, i, j);
  }
  cellsContainer.appendChild(rowContainer);
}

// TO show Cell id 
let addressBar = document.querySelector(".address-bar");
function addListnerForCellAddressDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    let rowId = i+1;
    let colId = String.fromCharCode(65 + j);
    addressBar.value = `${colId}:${rowId}`
  })
}

