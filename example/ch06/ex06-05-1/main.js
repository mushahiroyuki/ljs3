const o = {
  name: 'Wallace',
  speak() { return `My name is ${this.name}!`; },
}
const o2 = {
  名前: 'ポチ',
  話す() { return `僕の名前は「${this.名前}」だよ。`; },
}
console.log(o); // { name: 'Wallace', speak: [Function: speak] }
console.log(o2); // { '名前': 'ポチ', '話す': [Function: 話す] }
console.log(o.speak()); // My name is Wallace!
console.log(o2.話す()); // 僕の名前は「ポチ」だよ。
