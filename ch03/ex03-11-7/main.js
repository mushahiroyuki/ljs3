const sam3 = {
  name: 'Sam',
  classification: { // プロパティの値がオブジェクト
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
  分類: { // プロパティの値がオブジェクト
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
sam3.speak = function() { return "Meow!"; };
タマ.鳴く = function() { return "ニャーゴ"; };
// #@@range_end(list1)

// #@@range_begin(list2)
console.log(sam3.speak()); // Meow!
console.log(タマ.鳴く()); // ニャーゴ
// #@@range_end(list2)

// #@@range_begin(list3)
delete sam3.classification; // classificationツリー全体を削除
delete sam3.speak; // speak関数を削除
console.log(sam3); // { name: 'Sam' }

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ); // { '名前': 'タマ' }
// #@@range_end(list3)
