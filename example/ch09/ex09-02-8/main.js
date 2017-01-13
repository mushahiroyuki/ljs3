// #@@range_begin(list1)
class Vehicle { /* 乗り物 */
  constructor() {
    this.passengers = []; /* 乗客 */
    console.log("Vehicleが生成された");
  }
  addPassenger(p) { /* 乗客を追加 */
    this.passengers.push(p);
  }
}

class Car extends Vehicle { /* 車は乗り物のサブクラス */
  constructor() {
    super(); /* スーパークラスのコンストラクタを呼び出す */
    console.log("Carが生成された");
  }
  deployAirbags() { /* エアバッグを作動させる */
    console.log("バーンッ！");
  }
}
// #@@range_end(list1)

// #@@range_begin(list2)
const v = new Vehicle(); // Vehicleが生成された
v.addPassenger("太郎");
v.addPassenger("花子");
console.log(v.passengers); // [ '太郎', '花子' ]

const c = new Car(); // Vehicleが生成された\nCarが生成された （\nは改行を表す）
c.addPassenger("景子");
c.addPassenger("ミドリ");
console.log(c.passengers); // [ '景子', 'ミドリ' ]
// v.deployAirbags(); /* これを実行するとエラーになってしまう */
c.deployAirbags(); // バーンッ！
// #@@range_end(list2)

// #@@range_begin(list3)
class Motorcycle extends Vehicle {} /* オートバイは乗り物のサブクラス */

const c2 = new Car(); // Vehicleが生成された\nCarが生成された
const m = new Motorcycle(); // Vehicleが生成された
console.log(c instanceof Car); // true
console.log(c instanceof Vehicle); // true
console.log(m instanceof Car); // false
console.log(m instanceof Motorcycle); // true
console.log(m instanceof Vehicle); // true
// #@@range_end(list3)
