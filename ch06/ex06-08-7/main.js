const bruce = { 名前: "ブルース" };

function update(birthYear, occupation) {
  this.生年 = birthYear;
  this.職業 = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce); // { '名前': 'ブルース' }
updateBruce1949("作詞家"); 
console.log(bruce); // { '名前': 'ブルース', '生年': 1949, '職業': '作詞家' }
