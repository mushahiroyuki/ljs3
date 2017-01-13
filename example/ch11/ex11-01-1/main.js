// #@@range_begin(list1)
function validateEmail(email) { /* メールアドレスを検証する */
  return email.match(/@/) ?  /* 三項演算子 5章参照 */
    email :  /* @が含まれる場合の戻り値 */
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

// const email = "jane_at_doe.com"; /* こちらにするとエラーになる */

