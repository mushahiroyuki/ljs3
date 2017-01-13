// Firefoxで実行すると、変化の様子が見られる
$(function() {

  alert("OKを押すと操作が行われます（*の追加）");
// #@@range_begin(list1) 
  $('p')
    .append('<sup>*</sup>');
// #@@range_end(list1)


  alert("OKを押すと操作が行われます（横線の追加）");
// #@@range_begin(list2) 
  $('p')
    .after('<hr>')
    .before('<hr>');
// #@@range_end(list2)

  })

