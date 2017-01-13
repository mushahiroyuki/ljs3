// 'use strict'; /* これを有効にすると「greet()」がエラーになる */
const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

/* この関数はオブジェクトに関連していないがcallを使えばthisが使えるようになる */
function greet() {
  return `私は${this.名前}よ！`;
}

console.log(greet()); // 私はundefinedよ！
console.log(greet.call(bruce)); // 私はブルースよ！ （thisをbruceに束縛して呼び出し）
console.log(greet.call(madeline)); // 私はマデラインよ！
