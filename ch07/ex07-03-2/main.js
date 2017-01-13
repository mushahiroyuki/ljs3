let user = { /* オブジェクトを定義 */
  name: "桃太郎",
  age: 25,
};

function greet() { /* あいさつをする */
  console.log(`こんにちは、${user.name}さん！`);
}
function getBirthYear() { /* 生年を得る */
  return new Date().getFullYear() - user.age;
}

greet(); // こんにちは、桃太郎さん！
console.log(getBirthYear()); // 1991  （実行する年によって変わる）
