const http = require('http');

const server = http.createServer(function(req, res) {
  if(req.method === 'GET' && req.url === '/favicon.ico') {
    // ページの要求で URLが favicon.icoだったら
    const fs = require('fs');
    const rs = fs.createReadStream('favicon.ico');
    rs.pipe(res);
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end(`urlは「${decodeURI(req.url)}」ですね。`);
  }
});

const port = 8080;
server.listen(port, function() {
  // サーバーが開始されたことを知らせるコールバック関数を渡すことができる
  console.log(`サーバーをポート${port}で開始`);
});
