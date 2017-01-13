class Es2015Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }
  
  get userGear() { return this._userGear; }
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0)
      throw new Error(`ギア指定が正しくない：${value}`);
    this._userGear = vaule;
  }
  
  shift(gear) { this.userGear = gear; }
}

function Es5Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ['P', 'N', 'R', 'D'];
  this._userGear = this.userGears[0];
}

console.log(typeof Es2015Car); // function
console.log(typeof Es5Car); // function
