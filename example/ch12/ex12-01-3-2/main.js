const book = [
  "ある所に初老の夫婦が住んでたとさ。",
  "夫は山へ妻は川へ行ったとさ。",
  "妻が川で洗濯をしていると、",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ、スッコッコ、",
  "ドンブラコッコ、スッコッコ。",
];
// #@@range_begin(list1)
const it = book[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* 実行結果
{ value: 'ある所に初老の夫婦が住んでたとさ。', done: false }
{ value: '夫は山へ妻は川へ行ったとさ。', done: false }
{ value: '妻が川で洗濯をしていると、', done: false }
{ value: '上流から桃が流れてきたとさ。', done: false }
{ value: 'ドンブラコッコ、スッコッコ、', done: false }
{ value: 'ドンブラコッコ、スッコッコ。', done: false }
{ value: undefined, done: true }
*/
// #@@range_end(list1)
