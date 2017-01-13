let count = 10; /* 整数リテラル、countも倍精度小数の形式で記憶される */
console.log(count); // 10
const blue = 0x0000ff; /* 16進数 (16進数のff = 10進数の255) */
console.log(blue); // 255
const umask = 0o0022; /* 8進数 (8進数の22 = 10進数の18) */
console.log(umask); // 18
const roomTemp = 21.5; /* 小数 */
console.log(roomTemp); // 21.5
const c = 3.0e6; /* 指数表記 (3.0×(10の6乗) = 3,000,000) */
console.log(c); // 3000000
const e = -1.6e-19; /* 指数表記 (-1.6×(10の-19乗) = 0.00000000000000000016) */
console.log(e); // -1.6e-19
const inf = Infinity;
console.log(inf); // Infinity
const ninf = -Infinity;
console.log(ninf); // -Infinity
const nan = NaN; /* 「Not A Number」の意 */
console.log(nan); // NaN

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log(Infinity/Infinity); // NaN
