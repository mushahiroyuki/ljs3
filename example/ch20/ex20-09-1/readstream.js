// 読み込み（read）ストリーム
const fs = require('fs');

const rs = fs.createReadStream('stream.txt', { encoding: 'utf8' });
rs.on('data', function(data) {
  console.log('>> データ: ' + data.replace('\n', '\\n'));
});
rs.on('end', function(data) {
  console.log('>> 終わり');
});
