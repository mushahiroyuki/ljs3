// #@@range_begin(list1)
const input = "Regex pros know the difference between\n" +
   "<i>greedy</i> and <i>lazy</i> matching.";
const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(output);
/* 実行結果
Regex pros know the difference between
<strong>greedy</i> and <i>lazy</strong> matching.
*/
// #@@range_end(list1)
console.log("==========");
// #@@range_begin(list2)
const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(output2);
/* 実行結果
Regex pros know the difference between
<strong>greedy</strong> and <strong>lazy</strong> matching.
*/
// #@@range_end(list2)



