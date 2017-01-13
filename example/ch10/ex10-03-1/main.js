// 「#@@」ではじまるコメントは、書籍中のプログラムリストを作るためのものです。無視してください。
// #@@range_begin(list1)
const roles = new Set();
// #@@range_end(list1)

// #@@range_begin(list2)
roles.add("ユーザー");
console.log(roles); // Set { 'ユーザー' }
// #@@range_end(list2)

// #@@range_begin(list3)
roles.add("管理者");
console.log(roles); // Set { 'ユーザー', '管理者' }
// #@@range_end(list3)

// #@@range_begin(list4)
console.log(roles.size); // 2
// #@@range_end(list4)

// #@@range_begin(list5)
roles.add("ユーザー");
console.log(roles); // Set { 'ユーザー', '管理者' }
// #@@range_end(list5)

// #@@range_begin(list6)
console.log(roles.delete("管理者")); // true
console.log(roles); // Set { 'ユーザー' }
console.log(roles.delete("管理者")); // false
// #@@range_end(list6)
