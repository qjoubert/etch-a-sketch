import drawing from "./drawing";
import grid from "./grid";

export default (function() {

  const colorBtns = document.querySelectorAll(".color-btn");
  const gridElement = document.querySelector("#grid");
  const gridSizeBtns = document.querySelectorAll(".grid-size-btn");
  const resetBtn = document.querySelector("#reset-btn");

  function addAllEventListeners() {
    listen(resetBtn, "click", grid.reset);
    listenAll(gridSizeBtns, "click", grid.resize);
    listenAll(colorBtns, "click", drawing.setColor);
    listen(document, "mousedown", drawing.draw);
    listen(document, "mouseup", drawing.stop);
  }
  
  function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
  }

  function colorBg(element, color) {
    element.style.backgroundColor = color;
  }

  function createSquare(squareSide) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    square.style.height = `${squareSide}px`;
    square.style.width = `${squareSide}px`;

    listen(square, "mouseover", drawing.colorSquare);

    return square;
  }

  function listen(target, event, action) {
    target.addEventListener(event, (e) => action(e));
  }

  function listenAll(targets, event, action) {
    targets.forEach(target => {
      target.addEventListener(event, (e) => action(e));
    })
  }

  function removeAllChildren(element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }

  function setGrid(squaresNum) {
    const squareSide = 960 / Math.sqrt(squaresNum); // 960 == height and width of grid in px
    
    removeAllChildren(gridElement);

    for (let i = 0; i < squaresNum; i++) {
      const square = createSquare(squareSide);
      gridElement.appendChild(square);
    } 
  }

  function setColorBtns() {
    colorBtns.forEach(btn => {
      colorBg(btn, btn.dataset.color);
    });
  }

  return {
    addAllEventListeners,
    clearGrid,
    colorBg,
    setColorBtns,
    setGrid,
  };
})();