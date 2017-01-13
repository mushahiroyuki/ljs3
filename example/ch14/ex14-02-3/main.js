const start = new Date();
let i=0;
const intervalId = setInterval(function() {
  let now = new Date(); /* 現在時刻を得る（15章参照）*/
  if(now.getMinutes() !== start.getMinutes() || ++i>10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
}, 5*1000);

/* 実行結果
1: Wed Oct 26 2016 18:03:18 GMT+0900 (JST)
2: Wed Oct 26 2016 18:03:23 GMT+0900 (JST)
3: Wed Oct 26 2016 18:03:28 GMT+0900 (JST)
4: Wed Oct 26 2016 18:03:33 GMT+0900 (JST)
5: Wed Oct 26 2016 18:03:38 GMT+0900 (JST)
6: Wed Oct 26 2016 18:03:43 GMT+0900 (JST)
7: Wed Oct 26 2016 18:03:48 GMT+0900 (JST)
8: Wed Oct 26 2016 18:03:53 GMT+0900 (JST)
9: Wed Oct 26 2016 18:03:58 GMT+0900 (JST)
*/
