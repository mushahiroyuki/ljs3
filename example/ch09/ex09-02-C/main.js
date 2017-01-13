class Car {
  constructor() {
  }
}

class InsurancePolicy {
}

// #@@range_begin(list1)
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
  o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
  o[GET_POLICY] = function() { return this[_POLICY]; }
  o[IS_INSURED] = function() { return !!this[_POLICY]; }
}

makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1[IS_INSURED]()); // false
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]()); // true

const car2 = new Car();
console.log(car2[IS_INSURED]()); // false
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]()); // true
// #@@range_end(list1)
