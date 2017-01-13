function addThreeSquareAddFiveTakeSquareRoot(x) {
  return Math.sqrt(Math.pow(x+3, 2)+5);
}

/* #1 */ 
const answer1 = (addThreeSquareAddFiveTakeSquareRoot(5) +
  addThreeSquareAddFiveTakeSquareRoot(2)) /
  addThreeSquareAddFiveTakeSquareRoot(7);
console.log(answer1); // 1.3451659672026264

/* #2 */ 
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2)) / f(7);
console.log(answer2); // 1.3451659672026264
