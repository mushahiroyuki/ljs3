if(typeof x === "undefined") { // ReferenceError: x is not defined （エラー）
  console.log("xは存在していない、あるいはundefined");
} else {
  // xを参照しても大丈夫... ではない！  
}
let x = 5;
