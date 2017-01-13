{ /* 外側のブロックの始まり */
  let x = '青';
  console.log(x); // 青
  { /* 内側のブロックの始まり */
    let x = 3;
    console.log(x); // 3
  } /* 内側のブロックの終わり */
  console.log(x); // 青
} /* 外側のブロックの終わり */
console.log(typeof x); // undefined （型はundefined。スコープから外れている）
