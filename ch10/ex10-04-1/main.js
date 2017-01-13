const naughty = new WeakSet();

const children = [
   { name: "和洋" },
   { name: "哲人" },
];

naughty.add(children[1]);

for(let child of children) {
   if(naughty.has(child))
      console.log(`${child.name}クンには石炭をあげる！`);
   else
      console.log(`${child.name}クンにはプレゼントをあげる！`);
}
/* 実行結果
和洋クンにはプレゼントをあげる！
哲人クンには石炭をあげる！
*/
