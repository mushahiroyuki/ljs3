function fact(n) {
  if(n === 1) return 1;
  return n * fact(n-1);
}

console.log(fact(4)); // 24
console.log(fact(5)); // 120
console.log(fact(8)); // 40320
