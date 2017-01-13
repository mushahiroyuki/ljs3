for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
  console.log(j); // 1 1 2 3 5 8 13 21    （数字の間に改行が入る）
  // temp は temporary（一時的な）の略
