function validPassword(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]+$/.test(p);
}

console.log(validPassword("aiueo")); // false
console.log(validPassword("3aiuEo")); // true
console.log(validPassword("traveLer2")); // true
console.log(validPassword("日本語3aB")); // false
console.log(validPassword("Pocke3")); // true
console.log(validPassword("Pocké3")); // false
