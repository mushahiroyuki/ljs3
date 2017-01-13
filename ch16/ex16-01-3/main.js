let x = 1000;
console.log(x.toPrecision(5)); // 1000.0
console.log(x.toPrecision(4)); // 1000
console.log(x.toPrecision(3)); // 1.00e+3
console.log(x.toPrecision(2)); // 1.0e+3
console.log(x.toPrecision(1)); // 1e+3
x = 15.335;
console.log(x.toPrecision(6)); // 15.3350
console.log(x.toPrecision(5)); // 15.335
console.log(x.toPrecision(4)); // 15.34
console.log(x.toPrecision(3)); // 15.3
console.log(x.toPrecision(2)); // 15
console.log(x.toPrecision(1)); // 2e+1
