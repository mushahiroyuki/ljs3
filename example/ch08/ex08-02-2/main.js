let arr = [1, 2, 3];
let arr2 = arr.concat(4, 5, 6);
console.log(arr); // [ 1, 2, 3 ]  （← 変更なし。以降も同じ）
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
arr2 = arr.concat([4, 5, 6]); //   （配列を渡す）
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
arr2 = arr.concat([4, 5], 6);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
arr2 = arr.concat([4, 5], [6, 7]); // 引数は2つでいずれも配列
console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7 ]
arr2 = arr.concat([4, [5, 6]]); // 引数は配列ひとつでその2番目の要素が配列
console.log(arr2); // [ 1, 2, 3, 4, [ 5, 6 ] ]
