const x = 3;
function f() {
  console.log(x); // 3  （これは動く）
  console.log(y); // ReferenceError: y is not defined　（エラーになる）
}

f();
const y = 3;
