/* Node 未対応の場合 →  traceur --async-functions true main.js */
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
async function fileReadAndWrite() {
  try {
    const results
	    = await Promise.all([readFile("a.txt"),
				 readFile("b.txt"),
				 readFile("c.txt")]);
    await writeToFile("d.txt", results[0]+results[1]+results[2]);
    console.log("ファイルの合体に成功しました。");
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

fileReadAndWrite();
// #@@range_end(list1)
