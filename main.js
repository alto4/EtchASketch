// Cache DOM
const gridContainer = document.querySelector('.container');

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

// Grab all generated grid items 
let gridItems = document.querySelectorAll('.grid-item');
console.log(gridItems);

// Loop through the node list to add an event listener to each
for (i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('mouseenter', changeColor);
}


function changeColor(e) {
  console.log("You hovered over the " + e.target.classList);
  e.target.style.backgroundColor = "blue";
}