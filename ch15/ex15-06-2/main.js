const before = { d: new Date().valueOf() };
console.log(before.d); // 1471490389847  （UNIXエポックからのミリ秒数）
console.log(typeof before.d); // number
const json = JSON.stringify(before);
console.log(json) // {"d":1471490389847}
const after = JSON.parse(json);
console.log(after) // { d: 1471490389847 }
console.log(typeof after.d)  // number
const d = new Date(after.d);
console.log(d); // 2016-08-18T03:19:49.847Z
