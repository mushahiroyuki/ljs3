/* Node 未対応の場合 →  traceur --async-functions true main.js */
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

async function ファイルの読み込みと書き込みを行う() {
  try {
    let 書き込むデータ = await ファイルを読み込む("a.txt");
    書き込むデータ += await ファイルを読み込む("b.txt");
    書き込むデータ += await ファイルを読み込む("c.txt");
    await ファイルへ書き込む("d.txt", 書き込むデータ);
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

ファイルの読み込みと書き込みを行う();
