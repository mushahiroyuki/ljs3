function getGreeting() {
  return "Hello world!";
}
// #@@range_begin(list1)
const o = {}; // oという（空の）オブジェクトを定義
o.f = getGreeting; // オブジェクトoのfというプロパティの値として関数を指定
console.log(o.f()); // Hello world!  （o.fに記憶されている関数を呼び出す）
// #@@range_end(list1)
