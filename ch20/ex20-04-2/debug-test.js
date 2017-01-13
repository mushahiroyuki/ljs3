const debug = require('./debug')('main'); 
debug("開始");

for (let i=0; i<10; i++) {
  console.log(i);
}

debug("終了");
