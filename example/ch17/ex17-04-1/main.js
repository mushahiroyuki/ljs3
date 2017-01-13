// #@@range_begin(list1)
const input = "As I was going to Saint Ives";
const output = input.replace(/\w{4,}/ig, '****');
console.log(output); // As I was **** to **** ****
// #@@range_end(list1)

// #@@range_begin(list2)
const input2 = "セント・アイヴスはイギリスに存在する町の名前です。";
const output2 = input2.replace(/[はをにで]/g, '　');
console.log(output2); // セント・アイヴス　イギリス　存在する町の名前　す。
// #@@range_end(list2)
