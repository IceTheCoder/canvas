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

    element.addEventListener("mouseenter", (event) => {
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

  // Touch support (❤️ ChatGPT)
  container.addEventListener("touchstart", (event) => {
  let touch = event.targetTouches[0];
  let cell = document.elementFromPoint(touch.clientX, touch.clientY);
    if (cell && cell.classList.contains("cell")) {
      isDrawing = true;
      toggleCellClass(cell);
    }
  });
  
  container.addEventListener("touchmove", (event) => {
    let touch = event.targetTouches[0];
    let cell = document.elementFromPoint(touch.clientX, touch.clientY);
    if (isDrawing && cell && cell.classList.contains("cell")) {
      toggleCellClass(cell);
    }
  });
  
  container.addEventListener("touchend", () => {
    isDrawing = false;
  });

  document.getElementById("delete-btn").addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((element) => {
      element.classList.remove("on");
      element.classList.add("off");
    });
  });
});

