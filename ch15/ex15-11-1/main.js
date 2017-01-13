/* Moment.jsのバージョンによって出力が異なることあり */
const moment = require('moment-timezone');
console.log(moment().fromNow()); // a few seconds ago
console.log(moment().subtract(1, 'year').format()); // 2015-12-01T21:00:08+09:00
console.log("=========");
console.log(moment().subtract(10, 'seconds').fromNow()); // a few seconds ago
console.log(moment().subtract(44, 'seconds').fromNow()); // a few seconds ago
console.log(moment().subtract(45, 'seconds').fromNow()); // a minute ago
console.log(moment().subtract(5, 'minutes').fromNow()); // 5 minutes ago
console.log(moment().subtract(44, 'minutes').fromNow()); // 44 minutes ago
console.log(moment().subtract(45, 'minutes').fromNow()); // an hour ago
console.log(moment().subtract(5, 'hours').fromNow()); // 5 hours ago
console.log(moment().subtract(21, 'hours').fromNow()); // 21 hours ago
console.log(moment().subtract(22, 'hours').fromNow()); // a day ago
console.log(moment().subtract(320, 'days').fromNow()); // 10 months ago
console.log(moment().subtract(321, 'days').fromNow()); // a year ago
