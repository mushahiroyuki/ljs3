'use strict';
const fs = require('fs');

function ジェネレータランナー(g) {
  const it = g();

  (function iterate(val) {
    const x = it.next(val);
    if(!x.done) {
      if(x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate, 0, x.value);
      }
    }
   })();
}


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
function* ファイルの読み込みと書き込みを行う() {
  try {
    let 書き込むデータ = yield ファイルを読み込む('a.txt');
    書き込むデータ += yield ファイルを読み込む('b.txt');
    書き込むデータ += yield ファイルを読み込む('c.txt');
    yield ファイルへ書き込む('d.txt', 書き込むデータ);
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

ジェネレータランナー(ファイルの読み込みと書き込みを行う);
// #@@range_end(list1)
