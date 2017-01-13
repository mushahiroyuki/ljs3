$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /* ここで描画する */
// #@@range_begin(list1)  本に表示されている部分の始まりを示します
  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';
// #@@range_end(list1)  本に表示されている部分の終わりを示します

  paper.view.draw();

});
