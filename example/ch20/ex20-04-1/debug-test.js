// 「npm install debug」 でインストール
// 「DEBUG=main node debug-test.js」 で実行

const debug = require('debug')('main'); // モジュールが戻す関数をすぐに呼び出す
debug("開始"); // デバッグがオンになっている場合、「main 開始 +0ms」とログが取られる

for (let i=0; i<10; i++) {
  console.log(i);
}

debug("終了");
