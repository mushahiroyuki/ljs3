const o = { name: "ジェリー" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5)); // 1
console.log(arr.lastIndexOf(5)); // 5
console.log(arr.indexOf("a")); // 2
console.log(arr.lastIndexOf("a")); // 2
console.log(arr.indexOf({ name: "ジェリー" })); // -1
console.log(arr.indexOf(o)); // 3
console.log(arr.indexOf([1, 2])); // -1
console.log(arr.indexOf("9")); // 7
console.log(arr.indexOf(9)); // -1

console.log(arr.indexOf("a", 5)); // -1  （"a"をarr[5]から検索する）
console.log(arr.indexOf(5, 5)); // 5
console.log(arr.lastIndexOf(5, 4)); // 1   （arr[4]から左に探す）
console.log(arr.lastIndexOf(true, 3)); // -1  （arr[3]から左に探してもない）
