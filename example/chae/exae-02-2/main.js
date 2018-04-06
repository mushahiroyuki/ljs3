/* 2016年12月現在、FirefoxやSafariが対応 */
for (let i=0; i<=300; i++) {
  const numPart = i.toString().padStart(3, 0);
  const filename = `pictures/pict${numPart}.jpg`;
  console.log(`<img src="${filename}" style="width: 4cm;">`);
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
