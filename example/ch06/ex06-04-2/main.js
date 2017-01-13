const o = {
  name: 'Wallace',  // プロパティがプリミティブ
  bark() { return 'Woof!'; }, // プロパティが関数。簡略形式
}
const o2 = {
  名前: 'ポチ',
  吠える() { return 'ウーッ、ワン！'; },
}
console.log(o); // { name: 'Wallace', bark: [Function: bark] }
console.log(o2); // { '名前': 'ポチ', '吠える': [Function: 吠える] }
console.log(o.bark()); // Woof!
console.log(o2.吠える()); // ウーッ、ワン！
