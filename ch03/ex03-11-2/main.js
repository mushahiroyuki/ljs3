const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]); // 3
console.log(obj.color); // 黄色
console.log(obj["color"]); // 黄色
console.log(obj.size); // undefined
console.log(obj[color]); // × エラーとなる

