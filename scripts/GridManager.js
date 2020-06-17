"use strict";

import DrawingManager from "/scripts/DrawingManager.js";
const drawingManager = new DrawingManager();

class GridManager {

  createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
  
    square.style.cssText = `
      border: 1px solid rgba(0,0,0,.5);
      box-sizing: border-box;
      float: left;
      height: 60px;
      width: 60px;
    `;
    return square;
  }

  getSquaresNumber() {
    return sessionStorage.getItem("squaresNumber");
  }

  resetGrid() {
    drawingManager.colorAllSquares("white");
  }

  setGrid() {
    const gridContainer = document.getElementById("grid-container");
    const squaresNumber = this.getSquaresNumber();
    for (let i = 0; i < squaresNumber; i++) {
      const square = this.createSquare();
      square.addEventListener("mouseover", (e) => {
        drawingManager.colorOneSquare(e, "black");
      });
      gridContainer.appendChild(square);
    } 
  }

  setSquaresNumber(n) {
    sessionStorage.setItem("squaresNumber", n);
  }
}

export default GridManager;
