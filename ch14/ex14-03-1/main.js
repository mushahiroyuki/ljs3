// #@@range_begin(list1)
function countdown(seconds) {
  return new Promise(
    function(onFulfilled, onRejected) {
      for(let i=seconds; i>=0; i--) {
	setTimeout(function() {
          if(i>0) console.log(i + '...');
          else onFulfilled(console.log("GO!"));
	}, (seconds-i)*1000);
      }
    } /* 無名関数の終わり */
  ); /* new Promise の引数の終わり*/
}
// #@@range_end(list1)

// #@@range_begin(list2)
countdown(5).then(
  function() { /* 成功（fulfilled）時に行う処理を記述 */
    console.log("カウントダウン成功");
  },
  function(err) { /* 失敗（rejected）時に行う処理を記述 */
    console.log("カウントダウンでエラーが起こった：" + err.message);
  }
);

/* 実行結果
5...
4...
3...
2...
1...
GO!
カウントダウン成功
*/
// #@@range_end(list2)
