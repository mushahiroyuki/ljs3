// 「node write-file2.js」 を実行

const fs = require('fs');
fs.writeFile(__dirname + '/hello.txt',
	     'Nodeからごあいさつです！\n', function(err) {
  if(err) return console.log('エラー：ファイルに書き込めません。');
});
