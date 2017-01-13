'use strict';
const fs = require('fs');

function grun(g) {
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

function readFile(fileName) {
  return new Promise(
    (resolve, reject)=> {
      fs.readFile(fileName, "utf-8",
		  (err, data) => err ? reject(err) : resolve(data));
    })
}

function writeFile(fileName, data) {
  return new Promise(
    (resolve, reject)=> {
      fs.writeFile(fileName, data, err => err ? reject(err) : resolve("OK"));
    });
}

// #@@range_begin(list1)
function* fileReadAndWrite() {
  try {
    const data = yield Promise.all([readFile('a.txt'),
				    readFile('b.txt'), readFile('c.txt')]);
    yield writeFile('d.txt', data[0]+data[1]+data[2]);
  } catch (err) {
    console.error("エラーが起こりました:" + err);
  }
}

grun(fileReadAndWrite);
// #@@range_end(list1)
