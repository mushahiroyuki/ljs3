let name = "桃太郎"; /* グローバル変数 */
let age = 25; /* グローバル変数 */

function greet() { /* あいさつをする */
  console.log(`こんにちは、${name}さん！`);
}
function getBirthYear() { /* 生年を得る */
  return new Date().getFullYear() - age; /* 今年から年齢を引く */
}

greet(); // こんにちは、桃太郎さん！
console.log(getBirthYear()); // 1991  （実行する年によって変わる）
