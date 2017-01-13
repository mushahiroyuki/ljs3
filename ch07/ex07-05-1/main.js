{ /* ブロック1 */
  const x = '青';
  console.log(x); // "青"
}
console.log(typeof x); // undefined  （スコープから外れているので、型はundefined）
{ /* ブロック2 */
  const x = 3;
  console.log(x); // 3
}
console.log(typeof x); // undefined
