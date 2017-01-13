module.exports = {
  geometricSum(a, x, n) { // 幾何級数
    if(x === 1) return a*n;
    return a*(1 - Math.pow(x, n))/(1 - x);
  },
  arithmeticSum(n) { // 1〜nまでの合計
    return (n + 1)*n/2;
  },
  quadraticFormula(a, b, c) { // 二次方程式の解
    const D = Math.sqrt(b*b - 4*a*c);
    return [(-b + D)/(2*a), (-b - D)/(2*a)];
  },
};
