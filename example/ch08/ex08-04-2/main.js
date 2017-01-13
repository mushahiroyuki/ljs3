const items = ["iPhone", "Android"];
const prices = [54800, 49800];
const cart = items.map((x, i) => ({ 名前: x, 価格: prices[i]}));
console.log(cart);
// [ { '名前': 'iPhone', '価格': 54800 }, { '名前': 'Android', '価格': 49800 } ]
