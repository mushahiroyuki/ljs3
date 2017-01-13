// #@@range_begin(list1)
const Car = (function() {
  const carProps = new WeakMap(); /* 10章参照 */
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, { userGear: this._userGears[0] });
    }
    
    get userGear() { return carProps.get(this).userGear; }
    set userGear(value) {
      if(this._userGears.indexOf(value) < 0)
        throw new Error(`ギア指定が正しくない：${value}`);
      carProps.get(this).userGear = value;
    }
    
    shift(gear) { this.userGear = gear; } /* shiftの定義 */
  } /* class Carの終わり */
  
  return Car;
})();

// #@@range_end(list1)
// #@@range_begin(list2)
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
/* 実行結果
Car {
  make: 'Tesla',
  model: 'Model S',
  userGears: [ 'P', 'N', 'R', 'D' ],
  userGear: 'P' }
*/

console.log(car2);
/* 実行結果
Car {
  make: 'Mazda',
  model: '3i',
  userGears: [ 'P', 'N', 'R', 'D' ],
  userGear: 'P' }
*/
// #@@range_end(list2)

// #@@range_begin(list3)
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); // D
console.log(car2.userGear); // R

car1.userGear = "N";
console.log(car1.userGear); // N
car1.userGear = "X"; // Error: ギア指定が正しくない：X  
// #@@range_end(list3)
