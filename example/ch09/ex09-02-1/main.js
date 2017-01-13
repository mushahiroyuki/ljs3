class Car {
  constructor() {
  }
}

const car1 = new Car();
const car2 = new Car();

console.log(car1 instanceof Car) // true
console.log(car2 instanceof Car) // true
console.log(car1 instanceof Array) // false
