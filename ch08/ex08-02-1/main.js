let arr = ["b", "c", "d"];
console.log(arr.push("e")); // 4  ←現在の長さ（要素数）
console.log(arr); // [ 'b', 'c', 'd', 'e' ]
console.log(arr.pop()); // e
console.log(arr); // [ 'b', 'c', 'd' ]
console.log(arr.unshift("a")); // 4  ←現在の長さ
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
console.log(arr.shift()); // a
console.log(arr); // [ 'b', 'c', 'd' ]
