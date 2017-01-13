// 配列リテラル
const arr1 = [1, 2, 3]; // 数字の配列
const arr2 = ["one", 2, "three"]; // 異なる型の要素をもつ配列
const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // 配列を要素とする配列
const arr4 = [  // オブジェクトや配列、関数など異なる型を要素としてもつ配列
   { name: "サル", type: "object", luckyNumbers: [5, 7, 13] },
   [
      { name: "キジ", type: "object" },
      { name: "鬼", type: "object" },
   ],
   1,
   function() { return "配列の要素として関数を記憶することもできる"; },
   "three",
];

// 要素へのアクセス
console.log(arr1[0]); // 1
console.log(arr1[2]); // 3
console.log(arr3[1]); // ['one', 2, 'three']
console.log(arr4[1][0]); // { name: 'キジ', type: 'object' }

// 配列の長さ
console.log(arr1.length); // 3
console.log(arr4.length); // 5
console.log(arr4[1].length); // 2

// 配列の長さを大きくする
arr1[4] = 5;
console.log(arr1); // [1, 2, 3, , 5]
console.log(arr1[3]); // undefined
console.log(arr1.length); // 5

// 配列の最後の要素より後ろの添字を使う（代入ではない）->大きさは変わらない
console.log(arr2[10]); // undefined
console.log(arr2.length); // 3

// Arrayコンストラクタ（通常は使われない）
const arr5 = new Array(); // 空の配列を生成
console.log(arr5); // []
const arr6 = new Array(1, 2, 3);
console.log(arr6); // [ 1, 2, 3 ]
const arr7 = new Array(2); // 長さ2の配列（各要素はundefined）
console.log(arr7); // [ ,  ]
console.log(arr7[1]); // undefined
const arr8 = new Array("2");
console.log(arr8); // ['2']
