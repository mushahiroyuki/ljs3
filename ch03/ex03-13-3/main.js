const a = [1, 2, 'c', 4, 5];
a[2] = 3;  // 3番目の要素に代入
console.log(a) // [1, 2, 3, 4, 5]
console.log(a.length); // 5

a[81.3] = "eighty-one point three";
console.log(a[81.3]); // eighty-one point three
a[-2] = "マイナス2";
console.log(a[-2]); // マイナス2
console.log(a);
// [ 1, 2, 3, 4, 5, '81.3': 'eighty-one point three', '-2': 'マイナス2' ]
console.log(a.length); // 5
