// #@@range_begin(list1)
/* 2016年12月現在、FirefoxやChromeが対応 */
const SPECIAL = Symbol();
let 各マスの賭け金 = {
  王冠: 0,
  錨: 5,
  ハート: 2,
  スペード: 0,
  クラブ: 3,
  ダイヤ: 0,
  [SPECIAL]: 13,
};

const 配列1 = Object.entries(各マスの賭け金);
console.log(配列1); // Array [ Array[2], Array[2], Array[2], Array[2], Array[2], Array[2] ]

for (let i=0; i<配列1.length; i++) {
  console.log(配列1[i]);
}
/* 実行結果
Array [ "王冠", 0 ]
Array [ "錨", 5 ]
Array [ "ハート", 2 ]
Array [ "スペード", 0 ]
Array [ "クラブ", 3 ]
Array [ "ダイヤ", 0 ]
*/
// #@@range_end(list1)

// #@@range_begin(list2)
console.log("　　マーク | 賭け金");
console.log("----------------------");
for (let [マーク, 賭け金] of Object.entries(各マスの賭け金)) {
  console.log(マーク.padStart(5, "　") + " | " + 賭け金);
}
console.log(`スペシャル | ${各マスの賭け金[SPECIAL]}`);

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
console.log(Object.values(各マスの賭け金)); // Array [ 0, 5, 2, 0, 3, 0 ]
// #@@range_end(list3)
