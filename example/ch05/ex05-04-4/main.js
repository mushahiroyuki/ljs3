let x = 0;
let counter = 0;// 無限ループになってしまって困る方が出るので、追加しました。（訳者）
while(true) {
  x += 0.1;
  console.log(x);
  if(x === 0.3) break;

	if (counter++ > 100) break; // 無限ループになってしまって困る方が出るので、追加しました。（訳者）
}
console.log(`${x}で停止。`);
