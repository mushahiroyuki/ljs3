const sam3 = {
  name: 'Sam',
  classification: {  // プロパティの値がオブジェクト
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};

const タマ = {
  名前: 'タマ',
  分類: {  // プロパティの値がオブジェクト
    界: '動物界',
    門: '脊索動物門',
    綱: '哺乳綱',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};

// #@@range_begin(list1)
console.log(sam3.classification.family); // Felinae
console.log(sam3["classification"].family); // Felinae
console.log(sam3.classification["family"]); // Felinae
console.log(sam3["classification"]["family"]); // Felinae

console.log(タマ.分類.科); // ネコ科
console.log(タマ["分類"].科); // ネコ科
console.log(タマ.分類["科"]); // ネコ科
console.log(タマ["分類"]["科"]); // ネコ科
// #@@range_end(list1)
