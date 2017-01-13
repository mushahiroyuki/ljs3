const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
const propArray = Object.keys(o);
console.log(propArray);
console.log("------");
propArray.forEach(prop => console.log(`${prop}: ${o[prop]}`));

/* 実行結果
[ 'a', 'b', 'c' ]
------
a: 1
b: 2
c: 3
*/
