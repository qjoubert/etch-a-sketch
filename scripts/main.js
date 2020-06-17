"use strict";

import DrawingManager from "./DrawingManager.js";
import GridManager from "./GridManager.js";

const gridManager = new GridManager();
gridManager.setSquaresNumber(256); // 256 squares == 16*16 grid
gridManager.setGrid();

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", gridManager.resetGrid);

const gridSizeButtons = document.querySelectorAll(".grid-size-button");
gridSizeButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    gridManager.resizeGrid(e);
  })
});

const drawingManager = new DrawingManager();
document.addEventListener("mousedown", (e) => {
  drawingManager.startDrawing();
  drawingManager.colorOneSquare(e, "black");
});

document.addEventListener("mouseup", drawingManager.stopDrawing);
