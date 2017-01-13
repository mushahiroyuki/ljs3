// Firefoxで実行すると、変化の様子が見られる
$(function() {

  alert("OKを押すと操作が行われます（前の例と同じ3つの操作）");
// #@@range_begin(list1) 
  $('<sup>*</sup>').appendTo('p'); // $('p').append('<sup>*</sup>')　と同じ
  $('<hr>').insertBefore('p'); // $('p').before('<hr>')　と同じ
  $('<hr>').insertAfter('p'); // $('p').after('<hr>')　と同じ
// #@@range_end(list1) 

  alert("OKを押すと操作が行われます（偶数番目の段落を赤字に）");
// #@@range_begin(list2) 
  $('p:odd').css('color', 'red');
// #@@range_end(list2) 

  })
