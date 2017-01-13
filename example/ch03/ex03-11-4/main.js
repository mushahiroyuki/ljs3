const obj = {};
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]); // 8
console.log(obj); // {}  （シンボルのプロパティ（SIZE）はデフォルトでは表示されない）

obj.SIZE = 12; // obj["SIZE"] = 12 と同じ。上のシンボルとは無関係
console.log(obj.SIZE); // 12
console.log(obj["SIZE"]); // 12  （上と同じプロパティの値）
console.log(obj[SIZE]); // 8  （シンボルSIZEのプロパティ）
console.log(obj); // { SIZE: 12 } （シンボルSIZEのプロパティではなく"SIZE"のプロパティ）
