'use strict';
const fs = require('fs');

// #@@range_begin(list1)
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
// #@@range_end(list1)

// #@@range_begin(list2)
function readFile(fileName) {
  return new Promise(
    (onFulfilled, onRejected) => {
      fs.readFile(fileName, "utf-8",
		  (err, data) => err ? onRejected(err) : onFulfilled(data));
    })
}

function writeFile(fileName, data) {
  return new Promise(
    (onFulfilled, onRejected) => {
      fs.writeFile(fileName, data, err => err ? onRejected(err) : onFulfilled("OK"));
    });
}

function* fileReadAndWrite() {
  const dataA = yield readFile('a.txt');
  const dataB = yield readFile('b.txt');
  const dataC = yield readFile('c.txt');
  yield writeFile('d.txt', dataA+dataB+dataC);
}
// #@@range_end(list2)

// #@@range_begin(list3)
grun(fileReadAndWrite);
// #@@range_end(list3)
