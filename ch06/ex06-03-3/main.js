function f(x) {
  console.log(`  関数fの中（代入の前）: x=${x}`);
  x = 5;
  console.log(`  関数fの中（代入の後）: x=${x}`);
}

let x = 3;
console.log(`関数fを呼び出す前: x=${x}`);
f(x);
console.log(`関数fを呼び出した後: x=${x}`);
