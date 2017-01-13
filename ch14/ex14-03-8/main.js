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

function launch() {
  return new Promise(function(onFulfilled, onRejected) {
    if(Math.random() < 0.5) /* 打ち上げ失敗 */
//      return onRejected(new Error("打ち上げ失敗！"));
      return;
    console.log("発射!");
    setTimeout(function() {
      onFulfilled("周回軌道に乗った！");
    }, 2*1000); /* 超速のロケット */
  });
}


// #@@range_begin(list1)
function addTimeout(fn, /* タイムアウトをアタッチする関数 */
		    period /* タイムアウトの時間 */
		   ) {
  if(period === undefined) period = 1000; /* デフォルトの設定 */
  return function(...args) {
    return new Promise(function(onFulfilled, onRejected) {
      const timeoutId = setTimeout(onRejected, period,
			     new Error("プロミス タイムアウト"));
      fn(...args)
        .then(function(...args) {
          clearTimeout(timeoutId);
          onFulfilled(...args);
        })
        .catch(function(...args) {
          clearTimeout(timeoutId);
          onRejected(...args);
        });
    });
  }
}
// #@@range_end(list1)

// #@@range_begin(list2)
countdown(3)
  .then(addTimeout(launch, 4*1000)) /* タイムアウトを4秒に設定 */
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("管制塔、管制塔。トラブル発生... " + err.message);
  });


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
管制塔、管制塔。トラブル発生... プロミス タイムアウト
*/
// #@@range_end(list2)