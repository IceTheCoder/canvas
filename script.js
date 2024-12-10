let canvasSize = 28;

document.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById("grid-container");

  for (let i = 0; i < canvasSize; i++) {
    let miniContainer = document.createElement("div");
    miniContainer.classList.add(`mini-container`);
    miniContainer.id = `mini-container-${i}`;
    container.appendChild(miniContainer);
    for (let j = 0; j < canvasSize; j++) {
      cell = document.createElement("div");
      cell.classList.add("cell");
    
      miniContainer.appendChild(cell);
      cell.id = `${i}-${j}`;
    }
  }
});