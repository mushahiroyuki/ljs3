const d = new Date();
console.log(d); // 2016-08-09T02:14:51.073Z （処理系によって異なる）
/* タイムゾーンを伴うグレゴリオ暦の日時のフォーマット */

console.log(d.valueOf()); // 1470708891073   （UNIXエポックからのミリ秒数）
