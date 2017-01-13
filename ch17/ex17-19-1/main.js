function validPassword(p) {
  return /[A-Z]/.test(p) &&  /* 大文字が含まれる */
    /[0-9]/.test(p) &&       /* 数字が含まれる */
    /[a-z]/.test(p) &&       /* 小文字が含まれる */
  !/[^a-zA-Z0-9]/.test(p);   /* それ以外の文字が含まれない */
}

console.log(validPassword("aiueo")); // false
console.log(validPassword("3aiuEo")); // true
console.log(validPassword("traveLer2")); // true
console.log(validPassword("日本語3aB")); // false
console.log(validPassword("Pocke3")); // true
console.log(validPassword("Pocké3")); // false
