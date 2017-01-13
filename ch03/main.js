let currentTempC = 22;  // 単位は摂氏
console.log("currentTempC（letの後）=" + currentTempC);	
currentTempC = 22.5;
console.log("currentTempC（代入の後）=" + currentTempC);	

let targetTempC, room1 = "会議室A", room2 = "ロビー";

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;


let count = 10;           // 整数リテラル、countの精度はdoubleのまま
const blue = 0x0000ff;    // 16進数 (16進数のff = 10進数の255)
const umask = 0o0022;     // 8進数 (8進数の22 = 10進数の18)
const roomTemp = 21.5;    // 小数
const c = 3.0e6;          // 指数表記 (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19;       // 指数表記 (-1.6 × 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;          // "Not A Number"



const small = Number.EPSILON; // 1と、1より大きい最小の値の差 （約2.2e-16）
const bigInt = Number.MAX_SAFE_INTEGER;  // 表現できる最大の整数
const max = Number.MAX_VALUE;            // 表現できる最大の数値
const minInt = Number.MIN_SAFE_INTEGER;  // 表現できる最小の整数
const min = Number.MIN_VALUE;            // 表現できる最小の数値
const nInf = Number.NEGATIVE_INFINITY;   // 負の無限大と同じ
const nan2 = Number.NaN;                  // NaNと同じ
const inf2 = Number.POSITIVE_INFINITY;    // 正の無限大と同じ


const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";


const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';


const s = "In JavaScript, use \\ as an escape character in strings.";


let currentTemp = 19.5;
// 00b0は"度"の記号を表すUnicodeコードポイント
const message = "The current temperature is " + currentTemp + "℃";
// const message = "The current temperature is " + currentTemp + "\u00b0C";

const message2 = `現在の温度は${currentTemp}℃です。`;


const multiline = "line1\
line2";


const multiline2 = "line1\n\
line2";

const multiline3 = `line1
line2`;

const multiline4 = `line1
    line2
    line3`;

// 論理値
let heating = true;
let cooling = false;

// シンボル
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
const symbolResult =  RED === ORANGE  // false: シンボルはすべてユニーク


// nullとundefined
let currentTemp2;            // implicit value of undefinedが暗黙値
const targetTemp2 = null;    // targetTempはnull -- "まだわからない"
currentTemp2 = 19.5;         // currentTemp に値が入った
currentTemp2 = undefined;    // currentTemp は初期化されたことが一度も
                            // ないかのように見える（これはお勧めしません）

// オブジェクト
const obj1 = {};
obj1.color = "yellow";


obj1["not an identifier"] = 3;
obj1["not an identifier"];         // 3
obj1["color"];                     // "yellow"


const SIZE = Symbol();
obj1[SIZE] = 8;
obj1[SIZE];                        // 8



const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 };   // 1行で宣言

const sam3 = {
  name: 'Sam',
  classification: {                 // プロパティ値は
    kingdom: 'Anamalia',          // それ自体がオブジェクトでもかまわない
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
  },
};

sam3.speak = function() { return "Meow!"; };

sam3.speak();           // "Meow!"


delete sam3.classification;         // classificationツリー全体を削除
delete sam3.speak;                  // speak関数を削除



const s2 = "hello";
s2.toUpperCase();        // "HELLO"



const a1 = [1, 2, 3, 4];                     // 数値を含む配列
const a2 = [1, 'two', 3, null];              // 混在型の配列
const a3 = [                                 // 複数行の配列
    "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [                                 // オブジェクトを含む配列
    { 名前: "ルビー", 硬度: 9 },
    { 名前: "ダイアモンド", 硬度: 10 },
    { 名前: "トパーズ", 硬度: 8 },
];
const a5 = [                                 // 配列を含む配列
    [1, 3, 5],
    [2, 4, 6],
];


const arr = ['a', 'b', 'c'];
arr.length;                                // 3


const arr2 = ['a', 'b', 'c'];

// 最初の要素を取得
arr2[0];                                    // 'a'

// arrの最後の要素のインデックス番号はarr.length-1:
arr2[arr.length - 1];                       // 'c'


const arr3 = [1, 2, 'c', 4, 5];
arr3[2] = 3;     // arr3は [1, 2, 3, 4, 5]に



const arr4 = [
   "One",
   "Two",
   "Three",
];
const o = {
   one: 1,
   two: 2,
   three: 3,
};



const now = new Date();
now;   // 例：Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)
 // ブラウザによって表示が違う


const halloween = new Date(2016, 9, 31);  // 月はゼロベースであることに注意
                                          // 9=10月

const halloweenParty = new Date(2016, 9, 31, 19, 0);   // 19:00 = 7:00 pm


console.log(halloweenParty.getFullYear());       // 2016
console.log(halloweenParty.getMonth());          // 9
console.log(halloweenParty.getDate());           // 31
console.log(halloweenParty.getDay());            // 1 (Mon; 0=Sun, 1=Mon,...)
console.log(halloweenParty.getHours());          // 19
console.log(halloweenParty.getMinutes());        // 0
console.log(halloweenParty.getSeconds());        // 0
console.log(halloweenParty.getMilliseconds());   // 0



// 極めて単純な電子メール認識パターン
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// 米国の電話番号認識パターン
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;


const numStr = "33.3";
const num = Number(numStr);   // これはNumberオブジェクトの
                              // インスタンス*ではなく*数値を作成

const b1 = parseInt("16 volts", 10);  // " volts"は無視され、16は
                                     // 基数10で解析される
const b2 = parseInt("3a", 16);        // 16進数の3aを解析するので、結果は58
const b3 = parseFloat("15.5 kph");    // " kph"は無視される
                                     // parseFloatは常に基数10として見なす

const d = new Date();         // 現在の日付
const ts = d.valueOf();       // 数値はUTCの1970年1月1日零時
                              // からのミリ秒数


const b = true;
const n8 = b ? 1 : 0;


const n9 = 33.5;
n9;                      // 33.5 - 数値
const s9 = n9.toString();
s9;                      // "33.5" - 文字列


const n10 = 0;              // "false"となる値
const b11 = !!n10;           // false
const b12 = Boolean(n10);    // false
