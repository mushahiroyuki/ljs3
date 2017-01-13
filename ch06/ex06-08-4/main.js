'use strict'; 
const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr)); // -5
console.log(Math.max.apply(null, arr)); // 15
