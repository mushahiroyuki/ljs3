console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(1.7, 2.3)); // ≒3.39

console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(15.5)); // ≒3.94

console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(22)); // ≒2.8

console.log(Math.exp(1)); // ≒2.718
console.log(Math.exp(5.5)); // ≒244.7

console.log(Math.expm1(1)); // ≒1.718
console.log(Math.expm1(5.5)); // ≒243.7

console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(2, 3, 4)); // ≒5.39

console.log("------------------")
console.log(Math.log(Math.E)); // 1
console.log(Math.log(17.5)); // ≒2.86

console.log(Math.log10(10)); // 1
console.log(Math.log10(16.7)); // ≒1.22

console.log(Math.log2(2)); // 1
console.log(Math.log2(5)); // ≒2.32

console.log(Math.log1p(Math.E - 1)); // 1
console.log(Math.log1p(17.5)); // ≒2.92

console.log("------------------")
console.log(Math.abs(-5.5)); // 5.5
console.log(Math.abs(5.5)); // 5.5

console.log(Math.sign(-10.5)); // -1
console.log(Math.sign(6.77)); // 1

console.log(Math.ceil(2.2)); // 3
console.log(Math.ceil(-3.8)); // -3

console.log(Math.floor(2.8)); // 2
console.log(Math.floor(-3.2)); // -4

console.log(Math.trunc(7.7)); // 7
console.log(Math.trunc(-5.8)); // -5

console.log(Math.round(7.2)); // 7
console.log(Math.round(7.7)); // 8
console.log(Math.round(-7.7)); // -8
console.log(Math.round(-7.2)); // -7

console.log(Math.min(1, 2)); // 1
console.log(Math.min(3, 0.5, 0.66)); // 0.5
console.log(Math.min(3, 0.5, -0.66)); // -0.66

console.log(Math.max(1, 2)); // 2
console.log(Math.max(3, 0.5, 0.66)); // 3
console.log(Math.max(-3, 0.5, -0.66)); // 0.5

console.log("------------------")
console.log(Math.sin(Math.PI/2)); // 1
console.log(Math.sin(Math.PI/4)); // ≒0.707
console.log(Math.cos(Math.PI)); // -1
console.log(Math.cos(Math.PI/4)); // ≒0.707
console.log(Math.tan(Math.PI/4)); // ≒1
console.log(Math.tan(0)); // 0

console.log(Math.asin(0)); // 0
console.log(Math.asin(Math.SQRT1_2)); // ≒0.785
console.log(Math.acos(0)); // ≒1.57
console.log(Math.acos(Math.SQRT1_2)); // ≒0.785
console.log(Math.atan(0)); // 0
console.log(Math.atan(Math.SQRT1_2)); // ≒0.615
console.log(Math.atan2(0, 1)); // 0
console.log(Math.atan2(1, 1)); // ≒0.785
console.log("------------------")
console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // ≒1.18
console.log(Math.cosh(0)); // 1
console.log(Math.cosh(1)); // ≒1.54
console.log(Math.tanh(0)); // 0
console.log(Math.tanh(1)); // ≒0.762
console.log(Math.asinh(0)); // 0
console.log(Math.asinh(1)); // ≒0.881
console.log(Math.acosh(0)); // NaN
console.log(Math.acosh(1)); // 0
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(1)); // Infinity
console.log("------------------")