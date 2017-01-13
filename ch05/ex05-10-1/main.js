// #@@range_begin(list1)
function formatBinary(x) {
  const y = x.toString(2); // 2進表記にする
  return ("0000" + y).substr(-4); // 右から4桁だけ取る
}

const FLAG_READ = 1;
const FLAG_WRITE = 2;
const FLAG_EXECUTE = 4;
console.log(formatBinary(FLAG_READ));    // 0001
console.log(formatBinary(FLAG_WRITE));   // 0010
console.log(formatBinary(FLAG_EXECUTE)); // 0100
console.log(formatBinary(FLAG_READ | FLAG_WRITE)); // 0011
// #@@range_end(list1)

console.log("-----");

// #@@range_begin(list2)
let p = FLAG_READ | FLAG_WRITE;
console.log(formatBinary(p)); // 0011  （右から2つのビットがオン）
let hasWrite = p & FLAG_WRITE ? "Yes" : "No";
console.log(`書き込みパーミッション：${hasWrite}`); // 書き込みパーミッション：Yes
let hasExecute = p & FLAG_EXECUTE ? "Yes" : "No";
console.log(`実行パーミッション：${hasExecute}`); // 実行パーミッション：No

console.log(formatBinary(p)); // 0011
p = p ^ FLAG_WRITE; //  （XORで書き込みフラグ[右から2ビット目]を反転する[オフになる]）
console.log(formatBinary(p)); // 0001
p = p ^ FLAG_WRITE; //  （書き込みフラグをオンに戻す）
console.log(formatBinary(p)); // 0011

/* 複数のフラグをひとつの式で指定することも可能  */
const hasReadAndWrite = p & (FLAG_READ | FLAG_WRITE) ? "可" : "不可";
console.log(`読み書き${hasReadAndWrite}`); // 読み書き可
// #@@range_end(list2)
