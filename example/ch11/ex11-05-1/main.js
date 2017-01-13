try {
  console.log("1行目実行中...");
  throw new Error("エラー1"); /* この行をコメントにすると下の行が実行される */
  console.log("throwが実行されると、この行は実行されない...");
} catch(err) {
  console.log("エラーが起こった...");
} finally {
  console.log("finallyの中のこの行はいつも実行される");
  console.log("リソースの解放をここで行う");
}

/* 実行結果
1行目実行中...
エラーが起こった...
finallyの中のこの行はいつも実行される
リソースの解放をここで行う
*/
