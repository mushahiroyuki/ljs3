console.log("setTimeoutの前：" + new Date());
setTimeout(
  function() {
    console.log("setTimeoutに指定された無名関数の中：" + new Date());
  },   /* ここまでsetTimeoutの第1引数（無名関数） */
  10*1000   /* setTimeoutの第2引数 */
); 
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");

/* 実行結果
setTimeoutの前：Fri Nov 04 2016 06:54:15 GMT+0900 (JST)
setTimeoutの後
これもsetTimeoutの後
setTimeoutに指定された無名関数の中：Fri Nov 04 2016 06:54:25 GMT+0900 (JST)
*/
