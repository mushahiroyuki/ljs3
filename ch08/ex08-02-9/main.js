let arr = [{ name: "Suzanne" }, { name: "Jim" },
	     { name: "Trevor" }, { name: "Amanda" }];
console.log(arr);
arr.sort((a, b) => a.name > b.name);  // nameでソート
console.log("------");
console.log(arr);
arr.sort((a, b) => a.name[1] < b.name[1]); // nameの2文字目で逆順にソート
console.log("------");
console.log(arr);

/* 実行結果 
[ { name: 'Suzanne' },
  { name: 'Jim' },
  { name: 'Trevor' },
  { name: 'Amanda' } ]
------
[ { name: 'Amanda' },
  { name: 'Jim' },
  { name: 'Suzanne' },
  { name: 'Trevor' } ]
------
[ { name: 'Suzanne' },
  { name: 'Trevor' },
  { name: 'Amanda' },
  { name: 'Jim' } ]
*/
