const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'hello.txt'),
	     'Nodeからごあいさつです！\n', function(err) {
  if(err) return console.log('エラー：ファイルに書き込めません。');
});
