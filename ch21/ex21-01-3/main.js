class Rectangle {  // 四角形
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {  // 外周を得る
    return this.width*2 + this.height*2; // 幅x2 + 高さx2
  }
}
const r = new Rectangle(5, 10);
console.log(`外周の長さ: ${r.perimeter}`); // 外周の長さ: 30
