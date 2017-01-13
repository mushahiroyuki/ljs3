const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); // 4
/* 添字（第2引数）が2より大きくて、ルートを取った値が整数になる */

console.log(arr.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x)))); // 49
