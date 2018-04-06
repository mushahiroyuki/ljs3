/* 2016年12月現在、Safari（最新版）で動作 */
function func1(arg1, arg2,) {
  return arg1 * arg2;
}
console.log(func1(3, 5,));

const result = 
	(function( arg1, arg2,) {
	  console.log(`足し算の結果=${arg1+arg2}`, );
	  return arg1 * arg2;
	}) ( 3, 5, );
console.log(`掛け算の結果=${result}`,);

/* 実行結果
15
足し算の結果=8
掛け算の結果=15
*/
