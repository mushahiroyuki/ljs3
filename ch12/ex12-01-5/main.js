const book = [
  "ある所に初老の夫婦が住んでたとさ。",
  "夫は山へ妻は川へ行ったとさ。",
  "妻が川で洗濯をしていると、",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ、スッコッコ、",
  "ドンブラコッコ、スッコッコ。",
];


/* この例は2016年11月現在Node.js, Firefox公開版、Google Chrome公開版は非対応。 */
// #@@range_begin(list1)
const it1 = book.values();
const it2 = book.values();

/* it1で2ページ読み込み */
console.log(it1.next()); 
  // { value: "ある所に初老の夫婦が住んでたとさ。", done: false }
console.log(it1.next());
  // { value: "夫は山へ妻は川へ行ったとさ。", done: false }

console.log(it2.next()); /* it2で1ページ読み込み */
  // { value: "ある所に初老の夫婦が住んでたとさ。", done: false }

console.log(it1.next()); /* またit1で読み込み */
  // { value: "妻が川で洗濯をしていると、", done: false }
// #@@range_end(list1)
