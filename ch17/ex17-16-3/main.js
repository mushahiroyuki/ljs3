const html =
  `○○<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;

const r = 
  html.replace(/<a .*?>(.*?)<\/a>/ig, function(match, group1, offset, origin) {
    console.log(`<a>タグが${offset+1}文字目から見つかった`);
    console.log(`リンク対象文字列は「${group1}」`);
    console.log(`元々の文字列は「${origin}」`);
    console.log(`マッチしたのは「${match}」`);
});
console.log(`r=「${r}」`);
