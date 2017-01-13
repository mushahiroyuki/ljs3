function countdown() {
  console.log("カウントダウン：");
  for(let i=5; i>=0; i--) { /* iはブロックスコープ */
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i);
    }, (5-i)*1000);
  }
}
countdown();

/* 実行結果
カウントダウン：
5
4
3
2
1
GO!
*/
