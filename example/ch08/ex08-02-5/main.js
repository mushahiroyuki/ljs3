let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2); // arr[1]の位置から置き換える。arr[2]から最後までコピーする
console.log(arr); // [ 11, 13, 14, 14 ]
console.log(arr2); // [ 11, 13, 14, 14 ] ← copyWithinはオブジェクト自身を返す
console.log(arr.copyWithin(2, 0, 2)); // [ 11, 13, 11, 13 ]
// ↑ arr[2]の位置から置き換える。arr[0]からarr[2]の前までコピーする
console.log(arr.copyWithin(0, -3, -1)); // [ 13, 11, 11, 13 ]
// ↑ arr[0]の位置から置き換える。最後から3番目の要素から最後の要素のひとつ前まで
//    （つまりarr[1]からarr[2]まで）コピーする
console.log(arr2); // [ 13, 11, 11, 13 ]
// ↑ arrを変更すると同じ配列を指しているarr2も変わる
