function calculate(a, x, n) {
  if(x === 1) return a*n;
  return a*(1 - Math.pow(x, n))/(1 - x);
}

module.exports = calculate;
