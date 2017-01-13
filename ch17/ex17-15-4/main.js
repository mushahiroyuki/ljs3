let html1 = `<a class='abc' id="s" href="/www.xx.yyy">サイトxx</a>`;
r = html1.replace(/<a .*?(class=(["']).*?\2) .*?(href=(["']).*?\4).*?>/,
				  '<a $3 $1>');
console.log(r); // <a href="/www.xx.yyy" class='abc'>サイトxx</a>
