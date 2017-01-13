const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED); // Symbol()
console.log(ORANGE); // Symbol(夕日の色)
console.log(RED === BLUE); // false   （シンボルはすべてユニーク。===については5章参照）
console.log(RED === ORANGE); // false  （シンボルはすべてユニーク）
