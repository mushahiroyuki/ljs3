'use strict';
const fs = require('fs');

function readFile(fileName) {
  return new Promise(
    (onFulfilled, onRejected)=> {
      fs.readFile(fileName, "utf-8", (err, data)=>{
	// console.log(data);
	if (err) {
	  // console.error("readFile error:" + fileName + err);
	  onRejected(err);
	}
	onFulfilled(data);
      });
    });
}

function writeFile(fileName, data) {
  return new Promise(
    (onFulfilled, onRejected)=> {
      fs.writeFile(fileName, data, err=>{
	if (err) {
	  // console.error("writeFile error:" + fileName + err);
	  onRejected(err);
	}
	onFulfilled("OK");
      });
    });
}

let allData = "";
readFile("a.txt")
.then(function(fileData) {
  allData += fileData;
  return readFile("b.txt"); /* プロミスを返してチェイニング可能にする */
})
.then(function(fileData) {
  allData += fileData;
  return readFile("c.txt");
})
.then(function(fileData) {
  allData += fileData;
  return writeFile("d.txt", allData);
})
.then(function(mes) {
  console.log("ファイルの合体に成功しました。");
})
.catch(err => {
  console.error("エラーが起こりました:" + err);
});

