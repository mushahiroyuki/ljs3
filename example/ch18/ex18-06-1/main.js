// Firefoxで実行すると、変化の様子が見られる
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "この段落は動的に生成されました。";
p2.textContent = "この段落は動的に生成された2つ目の段落です。";
const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
alert("変更します。第1段階");
parent.insertBefore(p1, firstChild);
alert("変更します。第2段階");
parent.appendChild(p2);
