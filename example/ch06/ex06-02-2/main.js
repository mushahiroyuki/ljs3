function getGreeting() {
  return "Hello world!";
}

// #@@range_begin(list1)
const f = getGreeting; // 関数をfに代入
console.log(f()); // Hello world!
// #@@range_end(list1)