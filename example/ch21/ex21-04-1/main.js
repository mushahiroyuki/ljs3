// #@@range_begin(list1)
const coefficients = { /* 係数 */
  a: 1,
  b: 2,
  c: 5,
};
// #@@range_end(list1)

// #@@range_begin(list2)
function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(evaluate(3, coefficients)); // 52    (1 + 2*3 + 5*(3*3))
// #@@range_end(list2)
