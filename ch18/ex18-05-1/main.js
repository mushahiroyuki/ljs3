// Firefoxで実行すると、変化の様子が見られる
const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent); // これは単純なHTMLファイルです。
console.log(para1.innerHTML); // これは<b>単純な</b>HTMLファイルです。
alert("変更します");
para1.textContent = "HTMLを修正しました。";
console.log(para1.textContent); // HTMLを修正しました。
alert("変更します");
para1.innerHTML = "innerHTMLを使った<b>修正後</b>のHTML";
console.log(para1.innerHTML); // innerHTMLを使った<b>修正後</b>のHTML
