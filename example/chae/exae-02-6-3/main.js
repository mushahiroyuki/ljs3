'use strict';
const fs = require('fs');

function generatorRunner(g) {
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
function* fileReadAndWrite() {
  try {
    let dataWriting = yield readFile('a.txt');
    dataWriting += yield readFile('b.txt');
    dataWriting += yield readFile('c.txt');
    yield writeToFile('d.txt', dataWriting);
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

generatorRunner(fileReadAndWrite);
// #@@range_end(list1)
