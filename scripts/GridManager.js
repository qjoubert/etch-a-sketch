"use strict";

import DrawingManager from "/scripts/DrawingManager.js";
const drawingManager = new DrawingManager();

class GridManager {

  createSquare(squareSideSize) {
    const square = document.createElement("div");
    square.classList.add("square");
  
    square.style.cssText = `
      border: 1px solid rgba(0,0,0,.5);
      box-sizing: border-box;
      float: left;
      height: ${squareSideSize}px;
      width: ${squareSideSize}px;
    `;
    return square;
  }

  getSquaresNumber() {
    return sessionStorage.getItem("squaresNumber");
  }

  resetGrid() {
    drawingManager.colorAllSquares("white");
  }

  resizeGrid(e) {
    const newSquaresNumber = e.target.dataset.squaresNumber;
    if (newSquaresNumber == this.getSquaresNumber()) return;
    this.setSquaresNumber(newSquaresNumber);
    this.setGrid();
  }

  setGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";
    const squaresNumber = this.getSquaresNumber();
    const squareSideSize = 960 / Math.sqrt(squaresNumber); // 960 represents the height/width size of the grid-container in px
    for (let i = 0; i < squaresNumber; i++) {
      const square = this.createSquare(squareSideSize);
      square.addEventListener("mouseover", (e) => {
        drawingManager.colorOneSquare(e);
      });
      gridContainer.appendChild(square);
    } 
  }

  setSquaresNumber(n) {
    sessionStorage.setItem("squaresNumber", n);
  }
}

export default GridManager;
