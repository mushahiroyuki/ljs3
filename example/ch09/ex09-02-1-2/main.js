class 自動車 {
  constructor() {
  }
}

const 自動車1 = new 自動車();
const 自動車2 = new 自動車();

console.log(自動車1 instanceof 自動車) // true
console.log(自動車2 instanceof 自動車) // true
console.log(自動車1 instanceof Array) // false
