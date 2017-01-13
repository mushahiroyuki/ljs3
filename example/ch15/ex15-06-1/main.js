// #@@range_begin(list1)
const before = { d: new Date() };
console.log(before.d); // 2016-08-18T03:16:16.512Z
console.log(before.d instanceof Date); // true
const json = JSON.stringify(before); // 文字列に変換
console.log(json); // {"d":"2016-08-18T03:16:16.512Z"}
const after = JSON.parse(json);
console.log(after.d instanceof Date) // false
console.log(typeof after.d) // string
/* 下に続く*/
// #@@range_end(list1)
// #@@range_begin(list2)
/* 上から続く */
console.log(after.d); // 2016-08-18T03:16:16.512Z
after.d = new Date(after.d);
console.log(after.d instanceof Date) // true
console.log(after.d) // 2016-08-18T03:16:16.512Z
// #@@range_end(list2)
