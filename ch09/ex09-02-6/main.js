const Car = (function() {
  const carProps = new WeakMap();

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
    
    shift(gear) { this.userGear = gear; }
  } // class Car
  
  return Car;
})();

// #@@range_begin(list1)
// クラスの定義はexample/ch09/ex09-02-4/main.jsと同じ。
const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift); // true
console.log(car1.shift === car2.shift); // true
car1.shift('D');
// car1.shift('d'); // ここでこれを実行するとエラーになってしまう
console.log(car1.userGear); // D

// 新たにメソッドshiftを定義。小文字で指定されても大文字に変換する
car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift); // false
console.log(car1.shift === car2.shift); // false
car1.shift('d'); // ここで実行してもエラーにはならない
console.log(car1.userGear); // D

// car2.shift('d'); // これを実行するとエラーになってしまう
// #@@range_end(list1)
