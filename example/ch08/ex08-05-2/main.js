const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x);
console.log(sum); // 18

const sum2 = arr.reduce((a, x) => a + x);
console.log(sum2); // 18
