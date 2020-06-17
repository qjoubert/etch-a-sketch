"use strict";

import DrawingManager from "./DrawingManager.js";
import GridManager from "./GridManager.js";

const gridManager = new GridManager();
gridManager.setSquaresNumber(256);
gridManager.setGrid();

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", gridManager.resetGrid);

const drawingManager = new DrawingManager();
document.addEventListener("mousedown", (e) => {
  drawingManager.startDrawing();
  drawingManager.colorOneSquare(e, "black");
});

document.addEventListener("mouseup", drawingManager.stopDrawing);
