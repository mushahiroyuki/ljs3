// Firefoxで実行すると、変化の様子が見られる
$(function() {

  alert("OKを押すと操作が行われます");
// #@@range_begin(list1)
  $('p')
    .after('<hr>')
    .not('.highlight')
    .css('margin-left', '5cm');
// #@@range_end(list1)
})
