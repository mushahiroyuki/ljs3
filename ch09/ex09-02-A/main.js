// #@@range_begin(list1)
class Car {
  constructor() {
  }
}

class InsurancePolicy { /* 保険契約 */
}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
  o.getInsurancePolicy = function() { return this.insurancePolicy; }
  o.isInsured = function() { return !!this.insurancePolicy; }
}
// #@@range_end(list1)

// #@@range_begin(list2)
const car1 = new Car();
makeInsurable(car1);
console.log(car1.isInsured()); // false
car1.addInsurancePolicy(new InsurancePolicy()); /* うまく行く */
console.log(car1.isInsured()); // true
// #@@range_end(list2)

const car2 = new Car();
makeInsurable(car2);
console.log(car2.isInsured()); // false
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured()); // true
