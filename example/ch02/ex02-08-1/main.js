$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  // #@@range_begin(list1) 本に表示されている部分の始まりを示します
  let tool = new Tool();

  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  };
  // #@@range_end(list1) 本に表示されている部分の終わりを示します
});
