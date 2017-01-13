const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
console.log(sum); // 18

const sum2 = arr.reduce((a, x) => a + x, 0); /* 「+=」の「=」 は省略できる */
console.log(sum2); // 18
