// #@@range_begin(list1)
const inputs = [
    "john@doe.com", /* メールアドレスのみ */
    "john@doe.com is my email", /* 先頭 */
    "my email is john@doe.com", /* 末尾 */
    "use john@doe.com, my email", /* 中間 */
    "my email:john@doe.com.",
];
// #@@range_end(list1)

// #@@range_begin(list2)
const emailMatcher =
   /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
const r = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(r);

/* 実行結果
[ '<a href="mailto:john@doe.com">john@doe.com</a>',
  '<a href="mailto:john@doe.com">john@doe.com</a> is my email',
  'my email is <a href="mailto:john@doe.com">john@doe.com</a>',
  'use <a href="mailto:john@doe.com">john@doe.com</a>, my email',
  'my email:<a href="mailto:john@doe.com">john@doe.com</a>.' ]
*/
// #@@range_end(list2)
