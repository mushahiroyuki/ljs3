/* index.htmlで Moment.jsを読み込んでいる。*/
/* Moment.jsに配列を渡すには、JavaScriptのDateのコンストラクタと同じ引数を使う。 */
/* toDate()がDateオブジェクトに戻してくれる */
const d = moment.tz([2017, 3, 27, 11, 30], 'Asia/Tokyo').toDate();
console.log(d); // 2017-04-27T02:30:00.000Z   （UTCの時刻 dはDateオブジェクト）
