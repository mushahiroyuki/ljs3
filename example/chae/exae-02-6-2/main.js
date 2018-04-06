const fs = require('fs');

function readFile(filename) {
  return new Promise( (funcSuccess, funcFail) => {
    fs.readFile(filename, "utf-8", (err, dataReadIn) => {
      err ? funcFail(err) : funcSuccess(dataReadIn);
    }); });
}

function writeToFile(filename, dataWriting) {
  return new Promise( (funcSuccess, funcFail) => {
    fs.writeFile(filename, dataWriting, err => {
      err ? funcFail(err) : funcSuccess('OK');
    }); });
}

// #@@range_begin(list1)
let dataWriting = "";
readFile("a.txt")
.then(function(dataFromFile) {
  dataWriting += dataFromFile;
  return readFile("b.txt");})
.then(function(dataFromFile) {
  dataWriting += dataFromFile;
  return readFile("c.txt");})
.then(function(dataFromFile) {
  dataWriting += dataFromFile;
  return writeToFile("d.txt", dataWriting);})
.then(function(message) {
  console.log("ファイルの合体に成功しました。");})
.catch(err => {
  console.error("エラーが起こりました:" + err);});
// #@@range_end(list1)
