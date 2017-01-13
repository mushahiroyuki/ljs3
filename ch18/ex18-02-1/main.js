/* ウェブブラウザで実行 */
console.log(document instanceof Node); // true
console.log(document.parentNode); // null 　　（親はいない）
console.log(document.childNodes); // NodeList [ DocumentType, <html> ]
console.log(document.nodeType); // 9
console.log(document.nodeName); // #document

const children = document.childNodes;
console.log("子どもの数:" + children.length); // 子どもの数:2
console.log(children[0]); // [object DocumentType]
console.log(children[0].nodeType); // 10
console.log(children[1]); // <html>
console.log(children[1].nodeType); // 1
console.log(children[2]); // undefined

console.log(Node.ELEMENT_NODE); // 1
console.log(children[1].nodeType === Node.ELEMENT_NODE); // true
console.log(Node.TEXT_NODE); // 3
