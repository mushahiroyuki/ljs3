let globalFunc; /* 未定義のグローバルな変数 */
{
  let blockVar = 'a'; /* ブロックスコープの変数 */
  globalFunc = function() {
    console.log(blockVar);
  }
}
globalFunc(); // a
