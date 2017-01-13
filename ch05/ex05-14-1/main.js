const obj = { b: 2, c: 3, d: 4 }; // オブジェクトの定義
const {a, b, c} = obj; // 分割代入
console.log(a); // undefined   （objにはプロパティaがない）
console.log(b); // 2
console.log(c); // 3
console.log(d); // ReferenceError: d is not defined （エラー。dには代入されていない）
