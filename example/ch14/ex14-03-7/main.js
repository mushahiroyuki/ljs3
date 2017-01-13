function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
    const timeoutIds = [];
    for(let i=seconds; i>=0; i--) {
      timeoutIds.push(setTimeout(function() {
        if(i===13) {
          timeoutIds.forEach(clearTimeout); /* すべてクリア */
	  return onRejected(new Error(`${i}という数は不吉過ぎます`));
	}
        if(i>0) console.log(i + '...');
        else onFulfilled(console.log("GO!"));
      }, (seconds-i)*1000))
    }
  });
}


// #@@range_begin(list1)
function launch() {
  return new Promise(function(onFulfilled, onRejected) {
    if(Math.random() < 0.5) return; /* 打ち上げ失敗 */
    console.log("発射!");
    setTimeout(function() {
      onFulfilled("周回軌道に乗った！");
    }, 2*1000); /* 超速のロケット */
  });
}

/* 実行結果1
3...
2...
1...
GO!
発射!
周回軌道に乗った！
*/

/* 実行結果2
3...
2...
1...
GO!
*/
// #@@range_end(list1)

// #@@range_begin(list2)
countdown(3)
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("管制塔、管制塔。トラブル発生...");
  })
// #@@range_end(list2)
