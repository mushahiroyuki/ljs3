let arr = [1, 2, 3, 4, 5];
let arr2 = arr.reverse();
console.log(arr); // [ 5, 4, 3, 2, 1 ]
console.log(arr2); // [ 5, 4, 3, 2, 1 ]  ← reverseはオブジェクト自身を返す
arr.reverse();
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
