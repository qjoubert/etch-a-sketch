"use strict";

import "./css/style.css";
import dom from "./modules/dom";
import drawing from "./modules/drawing";
import grid from "./modules/grid";

(function() {
  const resetBtn = document.querySelector("#reset-btn");
  const gridSizeBtns = document.querySelectorAll(".grid-size-btn");
  const colorBtns = document.querySelectorAll(".color-btn");

  grid.set();
  drawing.setColor("black");

  resetBtn.addEventListener("click", grid.reset);
  
  gridSizeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      grid.resize(e);
    })
  });

  colorBtns.forEach(btn => {
    const color = btn.dataset.color;
    dom.colorBg(btn, color);

    btn.addEventListener("click", () => {
      drawing.setColor(color);
    })
  });
  
  document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    drawing.start();
    drawing.colorSquare(e);
  });
  
  document.addEventListener("mouseup", drawing.stop);
})();
