// #@@range_begin(list1)
function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const it = abc();
console.log(it.next());  // { value: 'a', done: false }
console.log(it.next());  // { value: 'b', done: false }
console.log(it.next());  // { value: 'c', done: true }
// #@@range_end(list1)

// #@@range_begin(list2)
for(let l of abc()) { // 
  console.log(l); 
}
/* 実行結果
a
b
*/
// #@@range_end(list2)
