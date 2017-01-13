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
    console.log("発射!");
    setTimeout(function() {
      onFulfilled("周回軌道に乗った！");
    }, 2*1000); /* 超速のロケット */
  });
}

countdown(15)
  .then(launch)
  .then(function(msg) { /* 関数launch内のonFulfilledの引数がmsgに渡る */
    console.log(msg); // 周回軌道に乗った！  （成功した場合）
  })
  .catch(function(err) {
    console.error("管制塔、管制塔。トラブル発生... " + err);
  })

/* 実行結果
15...
14...
管制塔、管制塔。トラブル発生... Error: 13という数は不吉過ぎます
*/
