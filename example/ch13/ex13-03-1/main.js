const colors = ['赤', '橙', '黄', '緑', '青', '水色', '紫'];
let colorIndex = -1;
function getNextRainbowColor() {
  if(++colorIndex >= colors.length) colorIndex = 0;
  return colors[colorIndex];
}

console.log(getNextRainbowColor()); // 赤
console.log(getNextRainbowColor()); // 橙
console.log(getNextRainbowColor()); // 黄
console.log(getNextRainbowColor()); // 緑
console.log(getNextRainbowColor()); // 青
console.log(getNextRainbowColor()); // 水色
console.log(getNextRainbowColor()); // 紫
console.log(getNextRainbowColor()); // 赤
console.log(getNextRainbowColor()); // 橙
