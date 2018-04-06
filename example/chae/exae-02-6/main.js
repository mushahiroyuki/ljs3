/*  2018年4月6日現在 node （v8.9.4）も対応したようです
Node 未対応の場合 →  traceur --async-functions true main.js 
*/
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

async function fileReadAndWrite() {
  try {
    let dataWriting = await readFile("a.txt");
    dataWriting += await readFile("b.txt");
    dataWriting += await readFile("c.txt");
    await writeToFile("d.txt", dataWriting);
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

fileReadAndWrite();
