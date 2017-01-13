/* 日本で実行 */
const d = new Date(Date.UTC(1815, 9, 10));
console.log(d.getFullYear()); // 1815
console.log(d.getMonth()); // 9  （ →10月）
console.log(d.getDate()); // 10
console.log(d.getDay()); // 2  （→火曜日）
console.log(d.getHours()); // 9
console.log(d.getMinutes()); // 0
console.log(d.getSeconds()); // 0
console.log(d.getMilliseconds()); // 0

/* UTCで出力 */
console.log(d.getUTCFullYear()); // 1815
console.log(d.getUTCMonth()); // 9  （→10月）
console.log(d.getUTCDate()); // 10
console.log(d.getUTCDay()); // 2  （→火曜日）
console.log(d.getUTCHours()); // 0
console.log(d.getUTCMinutes()); // 0
console.log(d.getUTCSeconds()); // 0
console.log(d.getUTCMilliseconds()); // 0
