console.log("setTimeoutの前: " + new Date());
function f() {
  console.log("これは関数fの中: " + new Date());
}
setTimeout(f, 10*1000); /* 10秒後にfを実行。コールバック */
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");

/* 実行結果
setTimeoutの前: Thu Oct 27 2016 18:02:54 GMT+0900 (JST)
setTimeoutの後
これもsetTimeoutの後
これは関数fの中: Thu Oct 27 2016 18:03:04 GMT+0900 (JST)
*/
