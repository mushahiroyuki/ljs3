class Super { /* スーパークラスの定義 */
  constructor() {
    this.name = 'Super';
    this.isSuper = true;
  }
}

Super.prototype.sneaky = '非推奨！'; /* こうすることは可能だが、非推奨 */

class Sub extends Super { /* サブクラスの定義 */
  constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

const obj = new Sub(); /* サブクラスに属するオブジェクトをひとつ生成 */

for(let p in obj) {
  console.log(`${p}: ${obj[p]}` +
	      (obj.hasOwnProperty(p) ? '' : ' (継承)')); /* 三項演算子 5章参照 */
}
/* 実行結果
name: Sub
isSuper: true
isSub: true
sneaky: 非推奨！ (継承)

*/
