let f; /* 未定義のグローバルな変数 */
{
  let o = { note: '安全', note2: '大丈夫' };
  f = function() {
    console.log("無名関数の中: " + o.note); // 無名関数の中: 安全
    return o;
  }
}
let oRef = f();
console.log(oRef); // { note: '安全', note2: '大丈夫' }
oRef.note = "まったく安全ではない！";
console.log(oRef); // { note: 'まったく安全ではない！', note2: '大丈夫' }
