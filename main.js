// Cache DOM
const gridContainer = document.querySelector('.container');
const resetButton = document.querySelector('.btn-reset');
let randomModeOn = false;

// Setup initial grid by calling the resetGrid() function, which will prompt the user to input the desired number of rows and columns
resetGrid();

// Grab all generated grid items 
let gridItems = document.querySelectorAll('.grid-item');
console.log(gridItems);

// EVENT LISTENERS

// Event Listener for color change, triggered by a mouseenteer event
// Loop through the node list to add an event listener to each
for (i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('mouseenter', changeColor);
}

// Event Listener for reset button click - clear current grid items and redraw according to inputted specifications
document.querySelector('.btn-reset').addEventListener('click', resetGrid);

// Event Listener for random color button - when clicked, toggle to reverse option between random and blue colors
let btnToggle = document.querySelector('.btn-toggle-color')
btnToggle.addEventListener('click', toggleColor);



// FUNCTIONS

function toggleColor(e) {
  if (randomModeOn === true) {
    randomModeOn = false;
    btnToggle.textContent = "Random Mode";
    btnToggle.style.backgroundColor = "orange";
  } else {
    randomModeOn = true;
    btnToggle.textContent = "Blue Color Mode";
    btnToggle.style.backgroundColor = "blue";
  }
}

function changeColor(e) {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;

  console.log(red + green + blue);
  console.log("You hovered over the " + e.target.classList);
  if (randomModeOn === true) {
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
  } else {
    e.target.style.backgroundColor = 'blue';
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function resetGrid() {
  clearGrid();
  console.log("You hit the reset button.")
  // Prompt user to enter the number of columns and rows for the desired grid - CHANGE INTO INPUT FORM
  let gridSize = prompt("How big is your grid?");
  let totalGridItems = gridSize * gridSize;

  // Using CSS Grid Properties, set the container to hold and evenly space the specified number of rows and cols
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


  // Create a new gridItem div to fill all rows and cols, add a class of grid-item to control events 
  for (let i = 0; i < totalGridItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList = 'grid-item';
    gridContainer.appendChild(gridItem);
    console.log(`Grid item ${i} added`);
  }
}