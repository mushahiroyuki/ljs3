// #@@range_begin(list1)
const input = "As I was going to Saint Ives";
            /* 01234567891123456789212345678 */
console.log(input.startsWith("As")); // true
console.log(input.endsWith("Ives")); // true
console.log(input.startsWith("going", 9)); // true
	    // （9文字目から始まるか。文字の位置は0から数える）
console.log(input.endsWith("going", 14)); // true
            //  （先頭から14文字の長さに制限したときにgoingで終わっているか）
console.log(input.includes("going")); // true
console.log(input.includes("going", 10)); // false 　（10文字目以降にあるか）
console.log(input.indexOf("going")); // 9  （goingは何文字目から始まっているか）
console.log(input.indexOf("going", 10)); // -1（10文字目以降で何文字目か。ない場合-1）
console.log(input.indexOf("nope")); // -1

console.log("-----")
const input2 = "セント・アイヴスはイギリスにある町の名前です。";
             /* ０１２３４５６７８９０１２３４５６７８９２１２ */
console.log(input2.startsWith("セント")); // true
console.log(input2.endsWith("です。")); // true
console.log(input2.startsWith("イギリス", 9)); // true
	    // （9文字目から始まるか。文字の位置は0から数える）
console.log(input2.includes("アメリカ")); // false
console.log(input2.includes("町", 10)); // true （10文字目以降にあるか）
console.log(input2.indexOf("町")); // 16  （「町」は何文字目から始まっているか）
console.log(input2.indexOf("町", 10)); // 16（10文字目以降の何文字目？）
console.log(input2.indexOf("アメリカ")); // -1
// #@@range_end(list1)
console.log("--------------");

// #@@range_begin(list2)
console.log(input.toLowerCase().startsWith("as")); // true
// #@@range_end(list2)
console.log("--------------");

// #@@range_begin(list3)
const output = input.replace("going", "walking");
console.log(output); // As I was walking to Saint Ives
let output2 = input2.replace("イギリス", "英国");
output2 = output2.replace("名前", "名称");
console.log(output2); // セント・アイヴスは英国にある町の名称です。
// #@@range_end(list3)
