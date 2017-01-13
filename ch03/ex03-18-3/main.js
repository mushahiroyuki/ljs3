const b = true;
const c = false;
const n = b ? 1 : 0; /* bが真（に相当する値）のときは1、それ以外は0になる。5章参照 */
console.log(n); // 1
const m = c ? 1 : 0;
console.log(m); // 0
