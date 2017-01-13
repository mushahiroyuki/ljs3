const a = ['a', 'b', 'c'];
console.log(a.length); // 3  （配列の大きさ）
console.log(a[0]); // a   （最初の要素を取得）
console.log(a[a.length - 1]); // c （最終要素の添字はarr.length-1）
const b4 = [   /* オブジェクトを要素としてもつ配列 */
  { 名前: "ルビー", 硬度: 9 },
  { 名前: "ダイヤ", 硬度: 10 },
  { 名前: "トパーズ", 硬度: 8 },
];
console.log(b4[1].名前); // ダイヤ
console.log(b4[2].硬度); // 8
