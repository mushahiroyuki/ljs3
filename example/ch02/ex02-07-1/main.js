$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /* ここで描画する */
  // #@@range_begin(list1)  本に表示されている部分の始まりを示します
  let c;
  for(let x=25; x<400; x+=50) {
    for(let y=25; y<400; y+=50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }
  // #@@range_end(list1)  本に表示されている部分の終わりを示します
  paper.view.draw();

});
