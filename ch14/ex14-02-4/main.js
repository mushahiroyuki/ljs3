function countdown() {
  let i; /* iをループの外で定義していることに注意 */
  console.log("カウントダウン：");
  for(i=5; i>=0; i--) {
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i);
    }, (5-i)*1000);
  }
}
countdown();

/* 実行結果
カウントダウン：
-1
-1
-1
-1
-1
-1
*/