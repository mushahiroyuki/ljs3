const arr = [1, 2, 3, 4, 5];
delete arr[2];
console.log(arr); // [ 1, 2, , 4, 5 ]
const result = arr.map(x => 0);
console.log(result); // [ 0, 0, , 0, 0 ]
console.log(result[2]); // undefined
