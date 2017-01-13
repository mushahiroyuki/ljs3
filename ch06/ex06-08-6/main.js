const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

function update(birthYear, occupation) {
  this.生年 = birthYear;
  this.職業 = occupation;
}

const updateBruce = update.bind(bruce); /*updateBruceを使うとthisはbruceに束縛される*/


console.log(bruce); // { '名前': 'ブルース' }
updateBruce(1904, "俳優");
console.log(bruce); // { '名前': 'ブルース', '生年': 1904, '職業': '俳優' }

console.log(madeline); // { '名前': 'マデライン' }
updateBruce.call(madeline, 1274, "王様"); /* madelineに束縛しようとしても... */
console.log(madeline); // { '名前': 'マデライン' }     （madelineは不変）
console.log(bruce); // { '名前': 'ブルース', '生年': 1274, '職業': '王様' }
                    /* ↑ bruceが変わってしまう */