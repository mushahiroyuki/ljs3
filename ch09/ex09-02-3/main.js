// #@@range_begin(list1)
class Car {
  constructor(make, model) {
    this.make = make; /* メーカー */
    this.model = model; /* モデル */
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }
  
  get userGear() { return this._userGear; }
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0) /* 例外処理（11章参照） */
      throw new Error(`ギア指定が正しくない：${value}`);
    this._userGear = value;
  }
  
  shift(gear) { this.userGear = gear; }
}
// #@@range_end(list1)
// #@@range_begin(list2)
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
/* 実行結果
Car {
  make: 'Tesla',
  model: 'Model S',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P' }
*/
console.log(car2);
/* 実行結果
Car {
  make: 'Mazda',
  model: '3i',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P' }
*/
// #@@range_end(list2)

// #@@range_begin(list3)
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); // D
console.log(car2.userGear); // R

car1.userGear = "X"; // Error: ギア指定が正しくない：X  
// #@@range_end(list3)
