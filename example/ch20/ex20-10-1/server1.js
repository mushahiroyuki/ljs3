const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(`${req.method} ${req.url}`);
  res.end('Hello world!');
});

const port = 8080;
server.listen(port, function() {
  // サーバーが開始されたことを知らせるコールバック関数を渡すことができる
  console.log(`サーバーをポート${port}で開始`);
});
