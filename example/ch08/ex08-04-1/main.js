const cart = [ { 名前: "iPhone", 価格: 54800}, { 名前: "Android", 価格: 49800}];
const names = cart.map(x => x.名前); // 各オブジェクトの「名前」からなる配列を新たに作る
console.log(names); // [ 'iPhone', 'Android' ]
const prices = cart.map(x => x.価格);
console.log(prices); // [ 54800, 49800 ]
const discountPrices = prices.map(x => x*0.8); // 2割引の価格
console.log(discountPrices); // [ 43840, 39840 ]
const lcNames = names.map(x => x.toLowerCase()); // 小文字にする
// const lcNames = names.map(String.toLowerCase); 
// ↑Firefoxではこれでも動くが、nodeやGoogle Chromeでは動作しない
console.log(lcNames); // [ 'iphone', 'android' ]
