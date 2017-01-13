function highlightParas(containing) {
  if(typeof containing === 'string')
    containing = new RegExp(`${containing}`);
  const paras = document.getElementsByTagName('p');
  for(let p of paras) {
    if(!containing.test(p.textContent)) continue; //含まれていない
    p.classList.add('highlight'); // クラスを付加
  }
}

highlightParas('ユニーク'); // 関数呼び出し
