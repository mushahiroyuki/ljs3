function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}
const coefficients = {
  a: 1,
  c: 3,
};
// #@@range_begin(list1)
const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    return /^\d+$/.test(target[key]) ? target[key] : 0;
  },
});

console.log(betterCoefficients.a); // 1
console.log(betterCoefficients.b); // 0
console.log(betterCoefficients.c); // 3
console.log(betterCoefficients.d); // 0
console.log(betterCoefficients.z); // 0
console.log(betterCoefficients.anything); // 0
console.log(evaluate(5, betterCoefficients)); // 76
// #@@range_end(list1)
