// 「#@@」ではじまるコメントは、書籍中のプログラムリストを作るためのものです。無視してください。
// #@@range_begin(list1)
const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  }
})();
// #@@range_end(list1)

// #@@range_begin(list2)
const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('秘密A');
b.setSecret('秘密B');

console.log(a.getSecret()); // 秘密A
console.log(b.getSecret()); // 秘密B
// #@@range_end(list2)
