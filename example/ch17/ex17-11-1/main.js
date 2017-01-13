// #@@range_begin(list1)
const input = "Address: 333 Main St., Anywhere, NY, 55532.  Phone: 555-555-2525.";
const match = input.match(/.*\d{5}/);
console.log(match[0]); // Address: 333 Main St., Anywhere, NY, 55532
// #@@range_end(list1)

// #@@range_begin(list2)
const equation = "(2 + 3.5) * 7";
const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log(match2[0]); // (2 + 3.5) * 7
// #@@range_end(list2)

// #@@range_begin(list3)
const beer99 = "99 bottles of beer on the wall \n" +
   "take 1 down and pass it around -- \n" +
   "98 bottles of beer on the wall.\n";
const match3 = beer99.match(/[\s\S]*/);
console.log(match3[0] === beer99); // true
// #@@range_end(list3)
