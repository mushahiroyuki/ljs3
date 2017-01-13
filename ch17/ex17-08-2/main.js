// #@@range_begin(list1)
const beer99 = "99 bottles of beer on the wall " +
   "take 1 down and pass it around -- " +
   "98 bottles of beer on the wall.";
const match = beer99.match(/[^ 0-9a-z]/g); /* 英数字でもスペースでもないものにマッチ */
console.log(match); // [ '-', '-', '.' ]
// #@@range_end(list1)

// #@@range_begin(list2)
const beer99j = "99本のビンが、壁に並んでいます。" +
   "1本取って渡しました。" +
   "98本のビンが、壁に並んでいます。";
const match2 = beer99j.match(/[^0-9ァ-ヴぁ-ん。、]+/g);
console.log(match2); // [ '本', '壁', '並', '本取', '渡', '本', '壁', '並' ]
// #@@range_end(list2)
