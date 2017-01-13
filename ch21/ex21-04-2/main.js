function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

// #@@range_begin(list1)
const coefficients = {
    a: 1,
    c: 3,
};
console.log(evaluate(5, coefficients)); // NaN
// #@@range_end(list1)


