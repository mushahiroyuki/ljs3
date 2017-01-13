const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };

Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`));

/* 実行結果
xochitl: 2
xylophone: 5
*/
