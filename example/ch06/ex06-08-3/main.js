const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

function update(birthYear, occupation) {
  this.生年 = birthYear;
  this.職業 = occupation;
}

console.log(bruce); // { '名前': 'ブルース' }
update.apply(bruce, [1955, "俳優"]); /* 1955と"俳優"がupdateの引数となる */
console.log(bruce); // { '名前': 'ブルース', '生年': 1955, '職業': '俳優' }

console.log(madeline); // { '名前': 'マデライン' }
update.apply(madeline, [1918, "ライター"]);
console.log(madeline); // { '名前': 'マデライン', '生年': 1918, '職業': 'ライター' }
