// #@@range_begin(list1)
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
for(let prop in o) {
  if(!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}
/*  実行結果 （キーがシンボルであるプロパティはリストされない）
a: 1
b: 2
c: 3
*/
// #@@range_end(list1)

console.log("----");

// #@@range_begin(list2)
const o2 = { a: 1, b: 2, c: 3, SYM:4};
console.log(o2.SYM); // 4
console.log(o2["SYM"]); // 4
console.log(o2[SYM]); // undefined
// #@@range_end(list2)

console.log("----");

// #@@range_begin(list3)
const o3 = { a: 1, b: 2, c: 3};
o3[SYM] = 4;
console.log(o3.SYM); // undefined
console.log(o3["SYM"]); // undefined
console.log(o3[SYM]); // 4
// #@@range_end(list3)
