function f(o) {
  console.log(`  関数fの中、o.messageに代入する前の値："${o.message}"`);
  o.message = "messageの値を関数fの中で設定した！";
  console.log(`  関数fの中、o.messageに代入した後の値："${o.message}"`);
}

let o = {
  message: "messageの初期値"
};
console.log(`関数fを呼び出す前： o.message="${o.message}"`);
f(o);
console.log(`関数fを呼び出した後: o.message="${o.message}"`);
