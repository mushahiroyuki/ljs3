$(document).ready(function() {
  'use strict';
  console.log('main.js を読み込み中...');
  
  paper.install(window); // paperの準備1
  paper.setup(document.getElementById('mainCanvas'));//mainCanvasをキャンバスに

  let tool = new Tool();

  // Hello, Word!
  let c = Shape.Circle(200, 200, 80); //円
  c.fillColor = 'black'; // 中を黒く塗る
  let text = new PointText(200, 200); //新しいテキストを領域中央に
  text.justification = 'center'; //センタリング
  text.fillColor = 'white'; //色
  text.fontSize = 20; //フォントサイズ
  text.content = 'hello world'; //文字列

  // イベントハンドラ
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  };

});
