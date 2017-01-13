let arr = new Array(5).fill(1); // 大きさ5の配列を作り全体を1で初期化する
console.log(arr); // [ 1, 1, 1, 1, 1 ]
let arr2 = arr.fill("a"); // すべての要素に "a" を代入する
console.log(arr); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(arr2); // [ 'a', 'a', 'a', 'a', 'a' ] ← fillはオブジェクト自身を返す
console.log(arr.fill("b", 1)); // [ 'a', 'b', 'b', 'b', 'b' ]
// ↑ arr[1]から最後まで "b" を代入する
console.log(arr.fill("c", 2, 4)); // [ 'a', 'b', 'c', 'c', 'b' ]
// ↑ arr[2]からarr[4]の前まで（つまりarr[3]まで） "c" を代入する
console.log(arr.fill(5.5, -4)); // [ 'a', 5.5, 5.5, 5.5, 5.5 ]
// ↑ 最後から4番目の要素（つまりarr[1]）から最後まで 5.5 を代入する
console.log(arr.fill(0, -3, -1)); // [ 'a', 5.5, 0, 0, 5.5 ]
// ↑ 最後から3番目の要素（つまりarr[2]）から最後の要素のひとつ前（つまりarr[3]）まで0を代入
