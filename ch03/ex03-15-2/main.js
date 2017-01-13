const halloween = new Date(2016, 9, 31); // 月は0から始まる。9は10月を表す
console.log(halloween); // 2016-10-30T15:00:00.000Z （処理系により異なる）
// 時刻は現地時間の午前0:00（協定世界時で前日の15:00）
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
console.log(halloweenParty); // 2016-10-31T10:00:00.000Z
