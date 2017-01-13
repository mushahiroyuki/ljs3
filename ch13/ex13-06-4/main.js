function sum(arr, f) {
  /* fが指定されない場合は何もしない関数とする */
  if(typeof f != 'function') f = x => x;
  
  return arr.reduce((a, x) => a += f(x), 0); // reduceは8章参照
}

// #@@range_begin(list1)
function newSummer(f) {
  return arr => sum(arr, f); /* fを使って合計を取る関数を返す */
}
// #@@range_end(list1)

// #@@range_begin(list2)
const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3])); // 14  （1+4+9）
console.log(sumOfCubes([1, 2, 3])); // 36   （1+8+27）
// #@@range_end(list2)