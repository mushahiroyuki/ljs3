/* この例はNode.jsで実行する場合。ブラウザ版は同じフォルダのindex.htmlを参照  */
/* 実行前にコマンドラインで次を実行してmomentのインストールが必要 */
/*  npm install --save moment-timezone  */

const moment = require('moment-timezone');

/* Moment.jsに配列を渡す場合には、JavaScriptのDateのコンストラクタと同じ引数を使う。
   toDate()がDateオブジェクトに戻してくれる */
const d = moment.tz([2017, 3, 27, 11, 30], 'Asia/Tokyo').toDate();
console.log(d); // 2017-04-27T02:30:00.000Z  （UTCの時刻。dはDateオブジェクト）
