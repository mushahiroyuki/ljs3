const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }];
console.log(arr.findIndex(o => o.id === 5)); // 0  ←idが5ならば条件にマッチ
console.log(arr.findIndex(o => o.name === "花子")); // 1
console.log(arr.findIndex(o => o === 3)); // -1
console.log(arr.findIndex(o => o.id === 17)); // -1
console.log(arr.findIndex(o => o.id === 7)); // 1
