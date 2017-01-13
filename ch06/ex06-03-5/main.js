function f(o) {
  console.log(`  fの中（2つの代入の前）：o.message="${o.message}"`);
  o.message = "fで最初にセットされた";
  console.log(`  fの中（2つの代入の間）：o.message="${o.message}"`);
  o = {
    message: "新しいオブジェクト！"
  };
  console.log(`  fの中（2つの代入の後）：o.message="${o.message}"`);
}

let o = {
  message: '初期値'
};
console.log(`fの呼び出し前：o.message="${o.message}"`);
f(o);
console.log(`fの呼び出し後：o.message="${o.message}"`);
