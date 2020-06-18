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
  
  colorOneSquare(event) {
    if (this.checkIsDrawing() === "true" && event.target.classList.contains("square")) {
      const drawingColor = this.getDrawingColor();
      event.target.style.backgroundColor = drawingColor;
    }
  }

  getDrawingColor() {
    return sessionStorage.getItem("drawingColor");
  }

  setColorPickerButtons() {
    const colorPickerButtons = document.querySelectorAll(".color-picker-button");
    colorPickerButtons.forEach(button => {
      const bgColor = button.dataset.color;
      button.style.backgroundColor = bgColor;
      button.addEventListener("click", () => {
        this.setDrawingColor(bgColor)
      })
    });
  }

  setDrawingColor(color) {
    sessionStorage.setItem("drawingColor", color);
  }

  startDrawing() {
    sessionStorage.setItem("isDrawing", true);
  }

  stopDrawing() {
    sessionStorage.setItem("isDrawing", false);
  }
}

export default DrawingManager;
