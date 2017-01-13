function addPrefix(prefix) { //接頭辞を追加
  // argumentsを利用
  console.log(`${arguments[0]}, ${arguments[1]}, ${arguments[2]}`);
  // 非, プログラマー, デザイナー
  const prefixedWords = [];
  for(let i=1; i<arguments.length; i++) {
    prefixedWords[i-1] = prefix + arguments[i];
  }
  return prefixedWords;
}

console.log(addPrefix("非", "プログラマー", "デザイナー", "コーダー"));
            // [ '非プログラマー', '非デザイナー', '非コーダー' ]
