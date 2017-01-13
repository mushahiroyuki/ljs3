const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [ 3, 4, 5 ]
