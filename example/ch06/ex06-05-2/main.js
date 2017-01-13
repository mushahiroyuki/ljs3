const o = {
  name: 'Wallace',
  speak() { return `My name is ${this.name}!`; },
}
const speak = o.speak;
console.log(speak === o.speak); // true  （どちらの定数も同じ関数を参照している）
console.log(speak()); // "My name is undefined!" （undefinedが表示されない場合あり）
console.log(o.speak()); // "My name is Wallace!"
