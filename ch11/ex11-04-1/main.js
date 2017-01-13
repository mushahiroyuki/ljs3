function a() {
  console.log('a: bを呼び出す前');
  b();
  console.log('a: 終了');
}
function b() {
  console.log('b: cを呼び出す前');
  c();
  console.log('b: 終了');
}
function c() {
  console.log('c: エラーをスローする');
  throw new Error('c error');
  console.log('c: 終了');
}
function d() {
  console.log('d: cを呼び出す前');
  c();
  console.log('d: 終了');
}

try {
  a();
} catch(err) {
  console.log("---- a呼び出し後のerr.stack ----");
  console.log(err.stack);
  console.log("---- 終わり -----");
}

try {
  d();
} catch(err) {
  console.log("---- d呼び出し後のerr.stack ----");
  console.log(err.stack);
  console.log("---- 終わり ----");
}
