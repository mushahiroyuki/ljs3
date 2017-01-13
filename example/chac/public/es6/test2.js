// public/es6/test2.js
'use strict';
const sentences = [ // 定数の宣言
  { subject: 'Node.js', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) { // オブジェクトのデストラクチャリング
  console.log(`${subject} ${verb} ${object}`); // テンプレート文字列
}

for(let s of sentences) { // for ... ofの構文とlet
  say(s);
}
