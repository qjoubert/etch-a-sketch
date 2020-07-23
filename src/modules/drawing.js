import dom from "./dom";

export default (function() {
  
  function colorSquare(e) {
    if (isDrawing() && e.target.classList.contains("square")) {
      const drawingColor = getColor();
      dom.colorBg(e.target, drawingColor);
    }
  }

  function getColor() {
    return sessionStorage.getItem("drawingColor");
  }

  function isDrawing() {
    return sessionStorage.getItem("isDrawing");
  }

  function setColor(color) {
    sessionStorage.setItem("drawingColor", color);
  }

  function start() {
    sessionStorage.setItem("isDrawing", 1);
  }

  function stop() {
    sessionStorage.setItem("isDrawing", "");
  }

  return {
    colorSquare,
    getColor,
    setColor,
    start,
    stop,
  };
})();
