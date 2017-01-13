console.log("setTimeoutの前：" + new Date());
setTimeout( () => console.log("アロー関数の中：" + new Date()), 10*1000); 
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");

/* 実行結果
setTimeoutの前：Fri Nov 04 2016 06:53:30 GMT+0900 (JST)
setTimeoutの後
これもsetTimeoutの後
アロー関数の中：Fri Nov 04 2016 06:53:40 GMT+0900 (JST)
*/
