const message = (function() {
  const secret = "私は秘密です！";
  return `秘密の長さは${secret.length}文字です。`;
})();

console.log(message); // 秘密の長さは7文字です。
