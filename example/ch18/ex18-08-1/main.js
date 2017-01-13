function highlightParas(containing) {
  if(typeof containing === 'string')
    containing = new RegExp(`${containing}`);
  const paras = document.getElementsByTagName('p');
  for(let p of paras) {
    if(!containing.test(p.textContent)) continue; //含まれていない
    p.classList.add('highlight'); // クラスを付加
  }
}

function removeParaHighlights() {
  const paras = document.getElementsByTagName('p');
  // const paras = document.querySelectorAll('p.highlight'); // これも可
  for(let p of paras) {
    p.classList.remove('highlight');
  }
}

// #@@range_begin(list1)
const highlightActions 
	= document.querySelectorAll('[data-action="highlight"]');
// #@@range_end(list1)
console.log(highlightActions[0].dataset);
// DOMStringMap { containing: "ユニーク", action: "highlight" }
