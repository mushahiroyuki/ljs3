// #@@range_begin(list1)
class C自動車 {
  constructor(メーカー, モデル) {
    this.メーカー = メーカー;
    this.モデル = モデル;
    this.ギア_運転席_可能な値 = ['P', 'N', 'R', 'D'];
    this.ギア_運転席_現在値 = this.ギア_運転席_可能な値[0];
  }
  ギアチェンジ(ギア) {
    let x = this.ギア_運転席_可能な値.indexOf(ギア);
    if(this.ギア_運転席_可能な値.indexOf(ギア) < 0) {
      throw new Error(`ギア指定が変: ${ギア}`);
    }
    this.ギア_運転席_現在値 = ギア;
  }
}
// #@@range_end(list1)
// #@@range_begin(list2)
const 自動車1 = new C自動車("テスラ", "Model S");
const 自動車2 = new C自動車("マツダ", "3i");
console.log(自動車1);
/* 結果
C自動車 {
  'メーカー': 'テスラ',
  'モデル': 'Model S',
  'ギア_運転席_可能な値': [ 'P', 'N', 'R', 'D' ],
  'ギア_運転席_現在値': 'P' }
*/
console.log(自動車2);
/*
C自動車 {
  'メーカー': 'マツダ',
  'モデル': '3i',
  'ギア_運転席_可能な値': [ 'P', 'N', 'R', 'D' ],
  'ギア_運転席_現在値': 'P' }
*/
// #@@range_end(list2)

// #@@range_begin(list3)
自動車1.ギアチェンジ('D');
自動車2.ギアチェンジ('R');

console.log(自動車1.ギア_運転席_現在値); // D
console.log(自動車2.ギア_運転席_現在値); // R
// #@@range_end(list3)
