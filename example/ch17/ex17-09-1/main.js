// #@@range_begin(list1)
const tShirts =
   'Small:      9\n' +
   'Medium:     5\n' +
   'Large:      2\n';
const numbers = tShirts.match(/:\s*[0-9]/g);
console.log(numbers); // [ ':      9', ':     5', ':      2' ]
// #@@range_end(list1)

// #@@range_begin(list2)
const phoneNumber1 = "（0269）99-9876";
const phoneNumber2 = "0269ー99ー9875";
console.log(phoneNumber1.replace(/\D/g, '')); // 0269999876
console.log(phoneNumber2.replace(/\D/g, '')); // 0269999875
// #@@range_end(list2)

// #@@range_begin(list3)
const field1 = '   X   ';
const field2 = '　\t   '; /* 先頭に全角のスペースがある */
console.log(/\S/.test(field1)); // true
console.log(/\S/.test(field2)); // false （全角のスペースもホワイトスペース）
// #@@range_end(list3)
