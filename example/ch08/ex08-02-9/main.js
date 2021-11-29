let arr = [{ name: "Suzanne" }, { name: "Jim" },
	     { name: "Trevor" }, { name: "Amanda" }];
console.log(arr);
arr.sort((a, b) => a.name > b.name ? 1 : (a.name === b.name ? 0 : -1)); // nameでソート
/* たとえば次でもOKです　
arr.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  else if (a.name === b.name) {
    return 0;
  }
  else {
    return -1;
  }
})
*/
console.log("------");
console.log(arr);
arr.sort((a, b) => a.name[1] < b.name[1] ? 1 : (a.name[1] === b.name[1] ? 0 : -1)); // nameの2文字目で逆順にソート
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
