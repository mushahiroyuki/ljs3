f(); // ReferenceError: f is not defined　（エラー。メッセージは処理系によって異なる）
let f = function() {
  console.log('関数fが呼び出された');
}
