const small = Number.EPSILON; /* 1と、1より大きい最小の値の差 */
console.log(small);  // 2.220446049250313e-16
const bigInt = Number.MAX_SAFE_INTEGER;  /* 表現できる最大の整数 */
console.log(bigInt); // 9007199254740991
const max = Number.MAX_VALUE;            /* 表現できる最大の数値 */
console.log(max); // 1.7976931348623157e+308
const minInt = Number.MIN_SAFE_INTEGER; /* 表現できる最小の整数 */
console.log(minInt); // -9007199254740991
const min = Number.MIN_VALUE; /* 表現できる最小の数値 */
console.log(min); // 5e-324
const nInf = Number.NEGATIVE_INFINITY;
console.log(nInf); // -Infinity
const nan = Number.NaN;
console.log(nan); // NaN
const inf = Number.POSITIVE_INFINITY;
console.log(inf); // Infinity
