/* 2016年12月現在、FirefoxやSafariが対応 */
for (let i=0; i<=300; i++) {
  const 数字部分 = i.toString().padStart(3, 0);
  const ファイル名 = `pictures/pict${数字部分}.jpg`;
  console.log(`<img src="${ファイル名}" style="width: 4cm;">`);
}

/* 実行結果
<img src="pictures/pict000.jpg" style="width: 4cm;">
<img src="pictures/pict001.jpg" style="width: 4cm;">
<img src="pictures/pict002.jpg" style="width: 4cm;">
...
<img src="pictures/pict009.jpg" style="width: 4cm;">
<img src="pictures/pict010.jpg" style="width: 4cm;">
<img src="pictures/pict011.jpg" style="width: 4cm;">
<img src="pictures/pict012.jpg" style="width: 4cm;">
...
*/
