function sanitizeATag(aTag) { /* タグの属性の整理（不要な属性の削除） */
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i); /* <a...>...</a>の抜き出し*/
  // console.log(`parts[1]=${parts[1]}`); /* 属性部分 */
  // console.log(`parts[2]=${parts[2]}`); /* <a...>と</a>の間にある文字列 */
  const attributes = parts[1].split(/\s+/); /* 属性を分割 */
  return '<a ' + /* <a>タグの始まり */

    attributes  /* 属性に対して */
    .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
                   /* class、id、hrefの属性のみを選ぶ */
    .join(' ') /* スペースを間に挟みながら合体 */

    + '>'  /* <a>タグを閉じる */
    + parts[2]  /* <a>と</a>の間の文字列（リンク先のテキスト）を加える */
    + '</a>';  /* 閉じタグ */
}

// #@@range_begin(list1)
const html =
  `○○<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;

const r = html.replace(/<a .*?<\/a>/ig, function(m) {
  return sanitizeATag(m);
});
console.log(r); // ○○<a class="cl1" href="/foo" id="id1">XXX</a>△△
// #@@range_end(list1)
