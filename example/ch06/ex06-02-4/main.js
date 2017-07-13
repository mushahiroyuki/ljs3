function getGreeting() {
  return "Hello world!";
}

// #@@range_begin(list1)
const arr = [1, 2, 3];
arr[1] = getGreeting; // arr は[1, function getGreeting(), 3]になる
const message = arr[1](); 
console.log(message); // Hello world!
// #@@range_end(list1)

