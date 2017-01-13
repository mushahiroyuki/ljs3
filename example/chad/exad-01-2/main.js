const array2 = [1, 4, [9, 16], 25, 36, NaN];
console.log(array2.includes(1)); // true
console.log(array2.indexOf(1)); // 0
console.log(array2.includes(0)); // false
console.log(array2.indexOf(0)); // -1
console.log(array2.includes(16)); // false
console.log(array2.indexOf(16)); // -1
console.log(array2.includes(NaN)); // true
console.log(array2.indexOf(NaN)); // -1  （indexOfではNaNは見つからない）
console.log(["山", "川", "やま", "かわ"].includes("山")); // true
console.log(["山", "川", "やま", "かわ"].includes("かわ")); // true
console.log(["山", "川", "やま", "かわ"].includes("革")); // false
