console.log('ブロックの前');
{
  console.log('ブロック内');
  const x = 3;
  console.log(x);
}
console.log(`ブロックの外。x＝${x}`);

/* 実行結果
ブロックの前
ブロック内
3
ReferenceError: x is not defined　←エラーが起こる
...
*/