const f = (function() {
  let count = 0;
  return function() {
    return `この関数が呼ばれた回数：${++count}回。`;
  }
})();

console.log(f()); // この関数が呼ばれた回数：1回。
console.log(f()); // この関数が呼ばれた回数：2回。
console.log(f()); // この関数が呼ばれた回数：3回。
