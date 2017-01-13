// #@@range_begin(list1)
function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i>0) console.log(i + '...');
        else onFulfilled(console.log("GO!"));
      }, (seconds-i)*1000);
    }
  });
}
// #@@range_end(list1)

// #@@range_begin(list2)
countdown(5);

/* 実行結果
5...
4...
3...
2...
1...
GO!
*/
// #@@range_end(list2)
