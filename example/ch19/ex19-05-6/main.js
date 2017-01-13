$(function() {

  alert("ブラウザの内容を確認してください。OKを押すと操作が行われます");
// #@@range_begin(list1)
  $('p')
    .before('<hr>')
    .find('.code')
    .css('font-size', '30px');
// #@@range_end(list1)
})
