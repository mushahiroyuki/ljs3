// 「#@@」ではじまるコメントは、書籍中のプログラムリストを作るためのものです。無視してください。

// #@@range_begin(list1)
function validateEmail(email) {
  return email.match(/@/) ?
    email :
    new Error(`無効なメールアドレスです：${email}`);
}
// #@@range_end(list1)

// #@@range_begin(list2)
const email = "jane@doe.com";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error) {
  console.error(validatedEmail.message);
} else {
  console.log(`正しい形式のアドレスです：${validatedEmail}`);
}
// #@@range_end(list2)
