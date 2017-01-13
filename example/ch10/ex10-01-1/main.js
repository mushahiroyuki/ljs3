// #@@range_begin(list0)
const u1 = { name: '和洋' };
const u2 = { name: '花子' };
const u3 = { name: '涼子' };
const u4 = { name: '哲人' };
// #@@range_end(list0)

// #@@range_begin(list1)
const userRoles = new Map([
  [u1, 'ユーザー'],
  [u2, 'ユーザー'],
  [u3, '管理者'],
]);
// #@@range_end(list1)

console.log(userRoles.get(u2)); // ユーザー

// #@@range_begin(list2)
console.log(userRoles.has(u1)); // true
console.log(userRoles.get(u1)); // ユーザー
console.log(userRoles.has(u4)); // false
console.log(userRoles.get(u4)); // undefined
// #@@range_end(list2)

// #@@range_begin(list3)
console.log(userRoles.get(u1)); // ユーザー
userRoles.set(u1, '管理者');
console.log(userRoles.get(u1)); // 管理者
// #@@range_end(list3)

// #@@range_begin(list4)
console.log(userRoles.size); // 3
// #@@range_end(list4)

// #@@range_begin(list5)
for(let u of userRoles.keys())
  console.log(u.name); // 和洋\n花子\n涼子  （\nは改行を表す）

for(let r of userRoles.values())
  console.log(r); // 管理者\nユーザー\n管理者

for(let ur of userRoles.entries())
  console.log(`${ur[0].name}: ${ur[1]}`);//和洋: 管理者\n花子: ユーザー\n涼子: 管理者

for(let [u, r] of userRoles.entries()) /* デストラクチャリングを使ったほうが自然 */
  console.log(`${u.name}: ${r}`); // 和洋: 管理者\n花子: ユーザー\n涼子: 管理者

/* entriesはMapのデフォルトイテレータなので、次のように短くできる */
for(let [u, r] of userRoles)
  console.log(`${u.name}: ${r}`); // 和洋: 管理者\n花子: ユーザー\n涼子: 管理者
// #@@range_end(list5)

// #@@range_begin(list6)
console.log(userRoles.values()); // MapIterator { '管理者', 'ユーザー', '管理者' }
console.log([...userRoles.values()]); // [ '管理者', 'ユーザー', '管理者' ]
// #@@range_end(list6)

// #@@range_begin(list7)
userRoles.delete(u2);
console.log(userRoles.size); // 2
console.log([...userRoles.values()]); // [ '管理者', '管理者' ]
// #@@range_end(list7)

// #@@range_begin(list8)
userRoles.clear();
console.log(userRoles.size); // 0
console.log([...userRoles.values()]); // []
// #@@range_end(list8)
