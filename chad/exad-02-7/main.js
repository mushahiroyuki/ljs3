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

// #@@range_begin(list1)
async function ファイルの読み込みと書き込みを行う() {
  try {
    const 結果の配列
	    = await Promise.all([ファイルを読み込む("a.txt"),
				 ファイルを読み込む("b.txt"),
				 ファイルを読み込む("c.txt")]);
    await ファイルへ書き込む("d.txt", 結果の配列[0]+結果の配列[1]+結果の配列[2]);
    console.log("ファイルの合体に成功しました。");
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

ファイルの読み込みと書き込みを行う();
// #@@range_end(list1)
