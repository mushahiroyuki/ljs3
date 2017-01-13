'use strict'; 
const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

function update(birthYear, occupation) {
   this.生年 = birthYear;
   this.職業 = occupation;
}

console.log(bruce); // { '名前': 'ブルース' }
const newBruce = [1940, "武術家"];
update.call(bruce, ...newBruce);  /* apply(bruce, newBruce)と同じ */
console.log(bruce); // { '名前': 'ブルース', '生年': 1940, '職業': '武術家' }

const arr = [2, 3, -5, 15, 7];
console.log(Math.min(...arr)); // -5
console.log(Math.max(...arr)); // 15
