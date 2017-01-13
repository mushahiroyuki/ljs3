const bruce = { 名前: "Bruce" };

function update(birthYear, occupation) {
   this.誕生年 = birthYear;
   this.職業 = occupation;
}


const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce);
updateBruce1949("シンガーソングライター");
console.log(bruce);
   // bruce is now { name: "Bruce", birthYear: 1949,
   //    occupation: "singer, songwriter" }

