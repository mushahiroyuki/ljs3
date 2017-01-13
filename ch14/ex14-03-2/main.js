// #@@range_begin(list1)
function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i===13) return onRejected(new Error("この数は不吉過ぎます"));
        if(i>0) console.log(i + '...');
        else onFulfilled(console.log("GO!"));
      }, (seconds-i)*1000);
    }
  });
}
// #@@range_end(list1)

// #@@range_begin(list2)
countdown(15).then(
  function() {
    console.log("カウントダウン成功");
  },
  function(err) {
    console.log("カウントダウンでエラーが起こった：" + err.message);
  }
);
// #@@range_end(list2)

/* 実行結果
15...
14...
カウントダウンでエラーが起こった：この数は不吉過ぎます
12...
11...
〈中略〉
2...
1...
GO!
*/
