function sum(arr, f) {
  /* fが指定されない場合は何もしない関数とする */
  if(typeof f != 'function') f = x => x;
  
  return arr.reduce((a, x) => a += f(x), 0); /* reduceは8章参照 */
}
console.log(sum([1, 2, 3])); // 6  (=1+2+3)
console.log(sum([1, 2, 3], x => x*x)); // 14  (=1+4+9)
console.log(sum([1, 2, 3], x => Math.pow(x, 3))); // 36  (=1+8+27)
