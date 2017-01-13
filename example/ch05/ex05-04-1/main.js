const n = 5;
const s = "5";
console.log(n === s); // false   （データ型が異なる）
console.log(n !== s); // true
console.log(n === Number(s)); // true   （文字列の"5"が数値の5に変換される）
console.log(n !== Number(s)); // false
console.log(n == s); // true    （非推奨）
console.log(n != s); // false   （非推奨）

const a = { name: "あるオブジェクト" };
const b = { name: "あるオブジェクト" };
console.log(a === b); // false   （別のオブジェクトを指している）
console.log(a !== b); // true
console.log(a == b); // false    （非推奨）
console.log(a != b); // true     （非推奨）
