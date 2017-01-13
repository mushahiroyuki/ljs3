let x = 0;
while(true) {
  x += 0.1;
  console.log(x);
  if(Math.abs(x - 0.3) < Number.EPSILON) break;
}
console.log(`${x}で停止。`);

/* 実行結果
0.1
0.2
0.30000000000000004
0.30000000000000004で停止。
*/
