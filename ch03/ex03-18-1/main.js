const a = parseInt("16 volts", 10); //"volts"は無視。16は10進数として解釈される
console.log(a); // 16
const b = parseInt("3a", 16); // 3aは16進数として解釈
console.log(b); // 58
const c = parseFloat("15.5 kph"); //" kph"は無視。parseFloatは常に10進数として解釈
console.log(c); // 15.5
