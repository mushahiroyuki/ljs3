function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
    const timeoutIds = [];
    for(let i=seconds; i>=0; i--) {
      timeoutIds.push(setTimeout(
	function() {
          if(i===13) {
	    timeoutIds.forEach(clearTimeout); /* すべてクリア。forEachは9章参照　*/
	    onRejected(new Error(`${i}という数は不吉過ぎます`));
	  }
          else if(i>0) {
	    console.log(i + '...');
	  }
          else {
	    console.log("GO!");
	    onFulfilled();
	  }
	}, /* 無名関数の終わり */
	(seconds-i)*1000))
    }
  });
}

countdown(15).then(
  function() {
    console.log("カウントダウン成功");
  },
  function(err) {
    console.log("カウントダウンでエラーが起こった：" + err.message);
  }
);

/* 実行結果
15...
14...
カウントダウンでエラーが起こった：13という数は不吉過ぎます
*/
