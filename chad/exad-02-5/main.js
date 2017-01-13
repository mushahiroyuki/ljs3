/* 2016年11月現在、Chromeが対応 */
const SPECIAL = Symbol();
let 各マスの賭け金 = {
  王冠: 0,
  錨: 5,
  [SPECIAL]: 13,
};

let x = Object.getOwnPropertyDescriptors(各マスの賭け金);

console.log(x.王冠);
// Object {value: 0, writable: true, enumerable: true, configurable: true}
console.log(x.錨);
// Object {value: 5, writable: true, enumerable: true, configurable: true}
console.log(x[SPECIAL]);
// Object {value: 13, writable: true, enumerable: true, configurable: true}

for (let [プロパティ, ディスクリプタ] of Object.entries(x)) {
  console.log(プロパティ + "：");
  for (let [p, v] of Object.entries(ディスクリプタ)) {
    console.log("  " + p + "：" + v);
  }
}
/* 実行結果  （for文）
王冠：
  value：0
  writable：true
  enumerable：true
  configurable：true
錨：
  value：5
  writable：true
  enumerable：true
  configurable：true
*/
