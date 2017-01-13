function printDOM(node, prefix) {
  console.log(prefix + node.nodeName);
  for(let i=0; i<node.childNodes.length; i++) {
    printDOM(node.childNodes[i], prefix + '    ');
  }
}
printDOM(document, '');
