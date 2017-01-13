const fs = require('fs');

function ファイルを読み込む(ファイル名) {
  return new Promise( (成功時の関数, 失敗時の関数) => {
    fs.readFile(ファイル名, "utf-8", (err, 読み込まれたデータ) => {
      err ? 失敗時の関数(err) : 成功時の関数(読み込まれたデータ);
    }); });
}

function ファイルへ書き込む(ファイル名, 書き込むデータ) {
  return new Promise( (成功時の関数, 失敗時の関数) => {
    fs.writeFile(ファイル名, 書き込むデータ, err => {
      err ? 失敗時の関数(err) : 成功時の関数('OK');
    }); });
}

// #@@range_begin(list1)
let 書き込むデータ = "";
ファイルを読み込む("a.txt")
.then(function(ファイルからのデータ) {
  書き込むデータ += ファイルからのデータ;
  return ファイルを読み込む("b.txt");})
.then(function(ファイルからのデータ) {
  書き込むデータ += ファイルからのデータ;
  return ファイルを読み込む("c.txt");})
.then(function(ファイルからのデータ) {
  書き込むデータ += ファイルからのデータ;
  return ファイルへ書き込む("d.txt", 書き込むデータ);})
.then(function(メッセージ) {
  console.log("ファイルの合体に成功しました。");})
.catch(err => {
  console.error("エラーが起こりました:" + err);});
// #@@range_end(list1)
