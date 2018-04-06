// #@@range_begin(list1)
/* 2016年12月現在、FirefoxやChromeが対応 */
const SPECIAL = Symbol();
let betsEach = {
  王冠: 0,
  錨: 5,
  ハート: 2,
  スペード: 0,
  クラブ: 3,
  ダイヤ: 0,
  [SPECIAL]: 13,
};

const array1 = Object.entries(betsEach);
console.log(array1); 
/* 実行結果（node）
[ [ '王冠', 0 ],
  [ '錨', 5 ],
  [ 'ハート', 2 ],
  [ 'スペード', 0 ],
  [ 'クラブ', 3 ],
  [ 'ダイヤ', 0 ] ]
*/

for (let i=0; i<array1.length; i++) {
  console.log(array1[i]);
}
/* 実行結果
[ '王冠', 0 ]
[ '錨', 5 ]
[ 'ハート', 2 ]
[ 'スペード', 0 ]
[ 'クラブ', 3 ]
[ 'ダイヤ', 0 ]
*/
// #@@range_end(list1)

// #@@range_begin(list2)
console.log("　　マーク | 賭け金");
console.log("----------------------");
for (let [mark, bet] of Object.entries(betsEach)) {
  console.log(mark.padStart(5, "　") + " | " + bet);
}
console.log(`スペシャル | ${betsEach[SPECIAL]}`);

/* 実行結果
　　マーク | 賭け金
----------------------
　　　王冠 | 0
　　　　錨 | 5
　　ハート | 2
　スペード | 0
　　クラブ | 3
　　ダイヤ | 0
スペシャル | 13
*/
// #@@range_end(list2)

// #@@range_begin(list3)
console.log(Object.values(betsEach)); // [ 0, 5, 2, 0, 3, 0 ]
// #@@range_end(list3)
