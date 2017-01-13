const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]); // 3

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]); // 8
console.log(obj);  // { color: '黄色', 'not an identifier': 3 }
