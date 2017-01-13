let arr = [1, 5, 7];
let arr2 = arr.splice(1, 0, 2, 3, 4); // arr[1]から2, 3, 4が追加される
console.log(arr); // [ 1, 2, 3, 4, 5, 7 ]
console.log(arr2); // [] ←何も削除されていない
arr2 = arr.splice(5, 0, 6); // arr[5]に6が追加されて、以降ひとつずつ後ろへ
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr2); // [] ←何も削除されていない
arr2 = arr.splice(1, 2) // arr[1]から2個削除
console.log(arr); // [ 1, 4, 5, 6, 7 ]
console.log(arr2); // [ 2, 3 ] ←削除された要素
arr2 = arr.splice(2, 1, 'a', 'b'); // arr[2]から1個削除して'a'と'b'をそこに追加
console.log(arr); // [ 1, 4, 'a', 'b', 6, 7 ]
console.log(arr2); // [ 5 ] ←削除された要素
