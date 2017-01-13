const arr = [4, 6, 16, 36];
console.log(arr.every(x => x%2===0)); // true  （すべてが偶数）
console.log(arr.every(x => Number.isInteger(Math.sqrt(x)))); // false  （6は整数の2乗ではない）
