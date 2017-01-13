const input = "One two three";
let r = input.replace(/two/, '($`)');
console.log(r); // One (One ) three
r = input.replace(/\w+/g, '($&)');
console.log(r); // (One) (two) (three)
r = input.replace(/two/, "($')");
console.log(r); // One ( three) three
r = input.replace(/two/, "($$)");
console.log(r); // One ($) three
