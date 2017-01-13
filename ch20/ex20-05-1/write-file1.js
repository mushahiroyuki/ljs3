// 「node write-file1.js」 を実行

const fs = require('fs');

fs.writeFile('hello.txt', 'Nodeからごあいさつです！\n', function(err) {
  if(err) return console.log('エラー：ファイルに書き込めません。');
});
