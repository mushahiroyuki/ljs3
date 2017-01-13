// #@@range_begin(list1)
const a1 = [1, 2, 3, 4]; // 4つの数値を含む配列
const a2 = [1, 'two', 3, null]; // 型が混在している配列
const a3 = [ // 文字列の配列
  "What the hammer?  What the chain?",
  "In what furnace was thy brain?",
  "What the anvil?  What dread grasp",
  "Dare its deadly terrors clasp?",
];
const a4 = [ // 3つのオブジェクトを含む配列
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];
const b4 = [ // 同じく３つのオブジェクトの配列。日本語のプロパティ
  { 名前: "ルビー", 硬度: 9 },
  { 名前: "ダイヤ", 硬度: 10 },
  { 名前: "トパーズ", 硬度: 8 },
];
const a5 = [ // 配列を要素とする配列
  [1, 3, 5],
  [2, 4, 6],
];
// #@@range_end(list1)
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(b4);
console.log(a5);
