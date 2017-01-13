class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    const now = Date.now(); /* 現在時刻を表す整数。15章参照 */
    console.log(`ログ追加: ${message}（${now}）`);
    this.messages.push({ message, timestamp: now });
  }
// #@@range_begin(list1)
  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next: () => i >= messages.length ?
        {value: undefined, done: true} : {value: messages[i++], done: false}
    }
  } /* [Symbol.iterator]の終わり */
// #@@range_end(list1)
}

const log = new Log();
log.add("海の監視初日。勤務開始");
// しばらくして（時間の経過をsetTimeoutを使ってシミュレート）
setTimeout(function() {log.add("クジラを見た");}, 3*1000); /* 3秒後 */
// しばらくして
setTimeout(function() {log.add("1艘の船を見た");}, 7*1000);
//...
setTimeout(function() {log.add("監視終了");}, 9*1000);

setTimeout(function () {
  console.log(`-本日の業務報告- （${new Date()}）`); // 現在日時を表示
  for(let entry of log) {
    const date = new Date(entry.timestamp); // 人間が読める形式に変換（15章参照）
    console.log(`${entry.message} （${date}）`);
  }
}, 10*1000); /* 10秒後 */

/* 実行結果
ログ追加: 海の監視初日。勤務開始（1478504798122）
ログ追加: クジラを見た（1478504801137）
ログ追加: 1艘の船を見た（1478504805137）
ログ追加: 監視終了（1478504807141）
-本日の業務報告- （Mon Nov 07 2016 16:46:48 GMT+0900 (JST)）
海の監視初日。勤務開始 （Mon Nov 07 2016 16:46:38 GMT+0900 (JST)）
クジラを見た （Mon Nov 07 2016 16:46:41 GMT+0900 (JST)）
1艘の船を見た （Mon Nov 07 2016 16:46:45 GMT+0900 (JST)）
監視終了 （Mon Nov 07 2016 16:46:47 GMT+0900 (JST)）
*/
