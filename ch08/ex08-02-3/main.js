let arr = [11, 12, 13, 14, 15];
let arr2 = arr.slice(3); // arr[3]から後ろ
console.log(arr2); // [ 14, 15 ]
console.log(arr); // [ 11, 12, 13, 14, 15 ]  （変更なし。以降も同じ）
arr2 = arr.slice(2, 4); // arr[2]からarr[4]のひとつ前まで
console.log(arr2); // [ 13, 14 ]
arr2 = arr.slice(-2); // 最後から2番目以降
console.log(arr2); // [ 14, 15 ]
arr2 = arr.slice(1, -2); // arr[1]から、最後から2番目のひとつ前まで
console.log(arr2); // [ 12, 13 ]
arr2 = arr.slice(-2, -1); // 最後から2番目から最後から1番目のひとつ前まで
console.log(arr2); // [ 14 ]
