const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'),
	    { encoding: 'utf8' }, function(err, data) {
  if(err) return console.error('エラー：ファイルから読み込めません。');
  console.log('読み込んだファイルの内容：');
  console.log(data);
});
