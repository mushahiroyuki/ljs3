/* "red phosphorus"は「赤リン」。毒性がある。 */
const cook = {
  name: "Walt",
  redPhosphorus: 100, /* 危険なプロパティ */
  water: 500, /* 安全なプロパティ */
};
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("危険すぎます！");
    }
    /* ほかのプロパティは安全 */
    target[key] = value;
  },
});

protectedCook.water = 550;
console.log(protectedCook.water); // 550
console.log(protectedCook.redPhosphorus); // 100
protectedCook.redPhosphorus = 150; // 危険すぎます！
console.log(protectedCook.redPhosphorus); // 100   （変わっていない）

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus); // 150   （変わった）
