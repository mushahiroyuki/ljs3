const s = "5";
console.log(3 + +s); // 8   （+sなので、数字の5と解釈される）
console.log(3 + s); // 35   （文字列の連結となる）

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
console.log(-x1*1); // -0
console.log(+x2*2); // 6
console.log(+x3*3); // -4.5
console.log(-x4*4); // 25.32
