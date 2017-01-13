const moment = require('moment-timezone');
console.log(moment().format()); // 2016-12-01T14:19:07+09:00
const m = moment()
   .add(10, 'hours')
   .subtract(3, 'days')
   .endOf('month'); /* mは10時間進んでから3日戻った日の月の末日になる */
console.log(m.format()); // 2016-11-30T23:59:59+09:00

