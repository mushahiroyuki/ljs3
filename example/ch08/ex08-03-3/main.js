const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }];
console.log(arr.find(o => o.id === 5)); // { id: 5, name: '太郎' }
console.log(arr.find(o => o.id === 2)); // undefined
