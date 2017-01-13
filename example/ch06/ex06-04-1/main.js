const o = {
  name: 'Wallace',   // プロパティがプリミティブ
  bark: function() { return 'Woof!'; }, // プロパティが関数（メソッド）
}
const o2 = {
  名前: 'ポチ', 
  吠える: function() { return 'ウーッ、ワン！'; },
}
console.log(o); // { name: 'Wallace', bark: [Function: bark] }
console.log(o2); // { '名前': 'ポチ', '吠える': [Function: 吠える] }
console.log(o.bark()); // Woof!
console.log(o2.吠える()); // ウーッ、ワン！
