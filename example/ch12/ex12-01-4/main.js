/* この例は2016年11月現在Node.js, Firefox公開版、Google Chrome公開版は非対応。 */
const book = [
  "ある所に初老の夫婦が住んでたとさ。",
  "夫は山へ妻は川へ行ったとさ。",
  "妻が川で洗濯をしていると、",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ、スッコッコ、",
  "ドンブラコッコ、スッコッコ。",
];

// #@@range_begin(list1)
const it = book.values();
let current = it.next();
while(!current.done) {
   console.log(current.value);
   current = it.next();
}
/* 実行結果
ある所に初老の夫婦が住んでたとさ。
夫は山へ妻は川へ行ったとさ。
妻が川で洗濯をしていると、
上流から桃が流れてきたとさ。
ドンブラコッコ、スッコッコ、
ドンブラコッコ、スッコッコ。
*/
// #@@range_end(list1)
