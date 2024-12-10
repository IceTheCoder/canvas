document.addEventListener('DOMContentLoaded', () => {
  let canvasSize = 28;

  let isDrawing = false;

  let container = document.getElementById("grid-container");

  for (let i = 0; i < canvasSize; i++) {
    let miniContainer = document.createElement("div");
    miniContainer.classList.add(`mini-container`);
    miniContainer.id = `mini-container-${i}`;
    container.appendChild(miniContainer);

    for (let j = 0; j < canvasSize; j++) {
      cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("off");
    
      miniContainer.appendChild(cell);
      cell.id = `${i}-${j}`;
    }
  }

  function toggleCellClass(cell) {
    cell.classList.remove("off");
    cell.classList.add("on");
  }

  document.querySelectorAll('.cell').forEach((element, index) => {
    element.addEventListener("mousedown", (event) => {
      isDrawing = true;
      toggleCellClass(event.target);
    });

    element.addEventListener("mouseover", (event) => {
      if (isDrawing) {
        toggleCellClass(event.target);
      }
    });
  });

  document.querySelectorAll("*").forEach((element) => {
    element.draggable = false;

    element.addEventListener("dragstart", (event) => {
      event.preventDefault();
    })

    element.addEventListener("mouseup", () => {
      isDrawing = false;
    });
  });
});