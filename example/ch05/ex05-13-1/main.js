// #@@range_begin(list1)
let v, v0;
v = v0 = 9.8; /* 連続して代入。まず9.8がv0に、続いて同じ値がvに代入される */
console.log(v); // 9.8
console.log(v0); // 9.8
// #@@range_end(list1)

// #@@range_begin(list2)
const nums = [ 3, 5, 15, 7, 5 ];
let n, i=0;
/* 下のwhile文の条件で、nにはnums[i]の値が順番に代入されていく。
   nの値が10より小さいときだけwhile文の本体が実行される */
while(i<nums.length && (n = nums[i++]) < 10) {
  console.log(`10より小さい数字を発見：${n}`);
}
console.log(`10より大きい数字を発見：${n}`);
console.log(`未チェックの数字の個数：${nums.length-i}`);

/* 実行結果
10より小さい数字を発見：3
10より小さい数字を発見：5
10より大きい数字を発見：15
未チェックの数字の個数：2  */
// #@@range_end(list2)
