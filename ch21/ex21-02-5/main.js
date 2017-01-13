const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr, {
  sum: {
    value: function() { return this.reduce((a, x) => a+x); },
    enumerable: false
   },
  avg: {
    value: function() { return this.sum()/this.length; },
    enumerable: false
  }
});

console.log(arr.sum()); // 20.7
console.log(arr.avg()); // 4.14
