import dom from "./dom";

export default (function() {

  function reset() {
    dom.clearGrid();
  }

  function resize(e) {
    const currentSquaresNum = getSquaresNum();
    const newSquaresNum = e.target.dataset.squaresNum;

    if (newSquaresNum == currentSquaresNum) return;

    setSquaresNum(newSquaresNum);
    set();
  }

  function set() {
    if (!getSquaresNum()) {
      setSquaresNum(256);
    }

    dom.setGrid(getSquaresNum());
  }

  function getSquaresNum() {
    return sessionStorage.getItem("squaresNum");
  }

  function setSquaresNum(n) {
    sessionStorage.setItem("squaresNum", n);
  }

  return {
    reset,
    resize,
    set,
  };
})();
