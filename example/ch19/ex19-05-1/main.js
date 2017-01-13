// Firefoxで実行すると、変化の様子が見られる
$(function() {
  const $newPara = $('<p>新しく生成した段落...</p>');

  alert("まず現在の表示を確認してください。OKを押すと置換が行われます");
// #@@range_begin(list1) 
  $('p').text('すべての段落が、この文字列に置換されました');
// #@@range_end(list1)


  alert("OKを押すと置換が行われます（「すべての」の色が赤になります）");
// #@@range_begin(list2) 
  $('p').html('<span style="color: red">すべての</span>段落が置換されました');
// #@@range_end(list2)


  alert("OKを押すと置換が行われます（3番目の段落を置換）");
// #@@range_begin(list3) 
  $('p') // すべての段落にマッチ
    .eq(2) // 3番目の段落（0から数えて3つ目）
    .html('<b>3番目</b>の段落が置換されました');
// #@@range_end(list3)


  alert("OKを押すと置換が行われます（<p>...</p>をすべて削除）");
// #@@range_begin(list4)
  $('p').remove();
// #@@range_end(list4)
})
