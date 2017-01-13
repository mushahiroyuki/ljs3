const fs = require('fs');

function writeFile(fileName, data) {
  return new Promise((onFulfilled, onRejected) => {
    fs.writeFile(fileName, data, err=>{
      err ? onRejected(err) : onFulfilled('OK');
    }); });
}

function readFile(fileName) {
  return new Promise((onFulfilled, onRejected) => {
    const period = Math.random()*1000;
    console.log(`${fileName}: ${period}`);
    setTimeout(() => {
      fs.readFile(fileName, "utf-8", (err, data) => {
	err ? onRejected(err) : onFulfilled([fileName, data]);
      }); /* fs.readFile */
    }, period); /* setTimeout */
  }); /* Promise */
}

/* 3つのファイルの読み込みを同時に行い、最初に返ってきたものを採用 */
let selected;
Promise.race([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
.then(function(results) {
  selected = results[0];
  return writeFile("d.txt", results[1]);
})
.then(function(mes) {
  console.log(`ファイル${selected}の内容が書き込まれました。\n----`);
})
.catch(err => {
  console.error("エラーが起こりました:" + err);
});
