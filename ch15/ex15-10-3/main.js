const moment = require('moment-timezone');

let m = moment(); /* 現在 */
console.log(m.format()); // 2016-08-17T15:22:59+09:00
m.add(3, 'days'); /* mは3日後になる */
console.log(m.format()); // 2016-08-20T15:22:59+09:00
m.subtract(2, 'years'); /* mは現在の3日後より2年前の日付になる */
console.log(m.format()); // 2014-08-20T15:22:59+09:00

m = moment(); /* リセット */
m.startOf('year'); /* mは今年の1月1日になる */
console.log(m.format()); // 2016-01-01T00:00:00+09:00
m.endOf('month');   /* mは今年の1月31日になる */
console.log(m.format()); // 2016-01-31T23:59:59+09:00
