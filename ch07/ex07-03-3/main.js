let user = { /* オブジェクトを定義 */
  name: "桃太郎",
  age: 25,
};

function greet(person) { /* あいさつをする */
  console.log(`こんにちは、${person.name}さん！`);
}
function getBirthYear(person) { /* 生年を得る */
  return new Date().getFullYear() - person.age;
}

greet(user); // こんにちは、桃太郎さん！
console.log(getBirthYear(user)); // 1991
