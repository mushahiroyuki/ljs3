const fs = require('fs');

fs.readdir(__dirname, function(err, files) {
  if(err) return console.error('ディレクトリの内容を読み込めません。');
  console.log(`${__dirname}のファイル一覧：`);
  console.log(files.map(f => '\t' + f).join('\n'));
});
