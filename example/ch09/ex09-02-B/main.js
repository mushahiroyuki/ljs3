class Car {
  constructor() {
  }
}

class InsurancePolicy { // 保険契約
}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
  o.getInsurancePolicy = function() { return this.insurancePolicy; }
  o.isInsured = function() { return !!this.insurancePolicy; }
}

// #@@range_begin(list1)
makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1.isInsured()); // false
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured()); // true

const car2 = new Car();
console.log(car2.isInsured()); // false
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured()); // true
// #@@range_end(list1)
