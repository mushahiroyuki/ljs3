const debug1 = require('./debug')('1:');  // .jsは省略できる
const debug2 = require('./debug')('2:');

debug1('1番目のデバッガをスタート')
debug2('2番目のデバッガをスタート')

setTimeout(function() {
  debug1('時間がたつと...');
  debug2('何が起こるか？');
}, 200);
