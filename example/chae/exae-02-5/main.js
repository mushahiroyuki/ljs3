/* 2016年11月現在、Chromeが対応 */
const SPECIAL = Symbol();
let betsEach = {
  王冠: 0,
  錨: 5,
  [SPECIAL]: 13,
};

let x = Object.getOwnPropertyDescriptors(betsEach);

console.log(x.王冠);
/* 実行結果 node */
// { value: 0, writable: true, enumerable: true, configurable: true }
console.log(x.錨);
// { value: 5, writable: true, enumerable: true, configurable: true }
console.log(x[SPECIAL]);
/* { value: 13,
  writable: true,
  enumerable: true,
  configurable: true }
 */

for (let [property, descriptor] of Object.entries(x)) {
  console.log(property + "：");
  for (let [p, v] of Object.entries(descriptor)) {
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
