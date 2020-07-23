import drawing from "./drawing";

export default (function() {

  const grid = document.querySelector("#grid");
  
  function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
  }

  function colorBg(element, color) {
    element.style.backgroundColor = color;
  }

  function setGrid(squaresNum) {
    const squareSide = 960 / Math.sqrt(squaresNum); // 960 == height and width of grid in px
    
    _removeAllChildren(grid);

    for (let i = 0; i < squaresNum; i++) {
      const square = _createSquare(squareSide);
      grid.appendChild(square);
    } 
  }

  function _createSquare(squareSide) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    square.style.height = `${squareSide}px`;
    square.style.width = `${squareSide}px`;

    square.addEventListener("mouseover", (e) => {
      drawing.colorSquare(e);
    });

    return square;
  }

  function _removeAllChildren(element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }

  return {
    clearGrid,
    colorBg,
    setGrid,
  };
})();