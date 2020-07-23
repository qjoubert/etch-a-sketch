"use strict";

import "./css/style.css";
import dom from "./modules/dom";
import drawing from "./modules/drawing";
import grid from "./modules/grid";

(function() {
  grid.set();
  drawing.setColor();
  dom.setColorBtns();
  dom.addAllEventListeners();
})();
