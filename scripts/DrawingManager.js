"use strict";

class DrawingManager {

  checkIsDrawing() {
    return sessionStorage.getItem("isDrawing");
  }
  
  colorAllSquares(color) {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = color;
    })
  }
  
  colorOneSquare(event, color) {
    if (this.checkIsDrawing() === "true" && event.target.classList.contains("square")) {
      event.target.style.backgroundColor = color;
    }
  }

  startDrawing() {
    sessionStorage.setItem("isDrawing", true);
  }

  stopDrawing() {
    sessionStorage.setItem("isDrawing", false);
  }
}

export default DrawingManager;
