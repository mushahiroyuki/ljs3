$(function() {
  const $paras = $('p'); /* <p>タグにマッチするものを取得 */
  console.log($paras.length); // 5  （タグがマッチした段落の個数）
  console.log(typeof $paras); // object
  console.log($paras instanceof $); // true
  console.log($paras instanceof jQuery); // true
})
