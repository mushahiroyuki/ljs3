'use strict'
const fs = require('fs');

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data)=>{
      err ? reject(err) : resolve(data);
    }); });
}

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err=>{
      err ? reject(err) : resolve('OK');
    }); });
}

// #@@range_begin(list1)
/* 3つのファイルの読み込みを同時に行う */
Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
.then(function(results) {
  /* 実行結果（results）も配列になる */
  const allData = results[0] + results[1] + results[2];
  return writeFile("d.txt", allData); /* プロミスを返してチェイニング可能にする */
})
.then(function(mes) {
  console.log("ファイルの合体に成功しました。");
})
.catch(err => {
  console.error("エラーが起こりました:" + err);
});
// #@@range_end(list1)
