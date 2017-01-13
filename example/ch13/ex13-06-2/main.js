const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

/* pipelineに2D変換を行う関数を3つ記憶する */
const pipeline = [ /* 関数を要素としてもつ配列 */
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta),
    };
  }, /* ここまでが pipeline[0] */

  function scale(p) {
    return { x: p.x * zoom, y: p.y * zoom };
  }, /* ここまでが pipeline[1] */

  function translate(p) {
    return { x: p.x + offset[0], y: p.y + offset[1] };
  }, /* ここまでが pipeline[2] */
];

/* pを変換する */
const p = { x: 1, y: 1 };
console.log(p);
let p2 = p;
for(let i=0; i<pipeline.length; i++) {
  p2 = pipeline[i](p2);
  console.log(p2);
}

/* 実行結果
{ x: 1, y: 1 }
{ x: 1.1102230246251565e-16, y: 1.414213562373095 }
{ x: 2.220446049250313e-16, y: 2.82842712474619 }
{ x: 1.0000000000000002, y: -0.17157287525381015 }
*/
