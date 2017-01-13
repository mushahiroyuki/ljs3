function highlightParas(containing) {
  if(typeof containing === 'string')
    containing = new RegExp(`${containing}`);
  const paras = document.getElementsByTagName('p');
  for(let p of paras) {
    if(!containing.test(p.textContent)) continue; //含まれていない
    p.classList.add('highlight'); // クラスを付加
  }
}

// #@@range_begin(list1)
function removeParaHighlights() {
  const paras = document.getElementsByTagName('p');
  // const paras = document.querySelectorAll('p.highlight'); // これも可
  for(let p of paras) {
    p.classList.remove('highlight');
  }
}
// #@@range_end(list1)

highlightParas('ユニーク');
alert("変更します"); // Firefoxで実行すると変化を見ることができます
removeParaHighlights();


