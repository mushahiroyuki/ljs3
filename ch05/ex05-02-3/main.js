// #@@range_begin(list1)
let x = 2;
console.log(x++ + x++); 
console.log(++x + ++x);
console.log(x++ + ++x);
console.log(++x + x++);
console.log(x)
console.log("-----")
let y = 10;
console.log(y-- + y--);
console.log(--y + --y);
console.log(y-- + --y);
console.log(--y + y--);
console.log(y)
// #@@range_end(list1)
/* 結果
// #@@range_begin(list2)
5    （2 + 3。  最終的なxの値は4）
11   （5 + 6。　最終的なxの値は6）
14   （6 + 8。　最終的なxの値は8）
18   （9 + 9。　最終的なxの値は10）
10
-----
19   （10 + 9。　最終的なyの値は8）
13   （7 + 6。　最終的なyの値は6）
10   （6 + 4。　最終的なyの値は4）
6    （3 + 3。　最終的なyの値は2）
2
// #@@range_end(list2)
*/
