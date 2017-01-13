for(let i=5; i>=0; i--) {
  setTimeout(function() {
    console.log(i===0 ? "go!" : i);
  }, (5-i)*1000);
}

/* 実行結果 （1秒おきに表示）
5
4
3
2
1
go!
*/
