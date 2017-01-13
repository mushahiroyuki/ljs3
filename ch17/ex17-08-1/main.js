// #@@range_begin(list1)
const beer99 = "99 bottles of beer on the wall " +
   "take 1 down and pass it around -- " +
   "98 bottles of beer on the wall.";
const m1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(m1); // [ '9', '9', '1', '9', '8' ]
// #@@range_end(list1)

// #@@range_begin(list2)
const m2 = beer99.match(/[0-9]/g); /* 範囲の指定。このほうが簡潔 */
console.log(m2); // [ '9', '9', '1', '9', '8' ]
// #@@range_end(list2)

// #@@range_begin(list3)
const m3 = beer99.match(/[0-9a-z\-.]/ig);
console.log(m3); // [ '9', '9', 'b', 'o', 〈中略〉 'w', 'a', 'l', 'l', '.' ]
// #@@range_end(list3)

// #@@range_begin(list4)
const m4 = beer99.match(/[-0-9a-z.]/ig); /* （「-」は先頭に書くとエスケープ不要） */
const m5 = beer99.match(/[a-z.0-9-]/ig); /* （「-」は末尾に書いてもエスケープ不要）*/

/* m3, m4, m5を比較。配列の内容を比較するために、JSON文字列に変換して比較 */
const m3String = JSON.stringify(m3);
const m4String = JSON.stringify(m4);
const m5String = JSON.stringify(m5);
console.log(m3String); // ["9","9","b","o", 〈中略〉 "w","a","l","l","."]
console.log(m3String===m4String); // true  （JSON文字列で比較）
console.log(m3String===m5String); // true
// #@@range_end(list4)
