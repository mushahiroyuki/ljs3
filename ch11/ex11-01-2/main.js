function validateEmail(email) {
  try {
    return email.match(/@/) ?
      email :
      new Error(`無効なメールアドレスです：${email}`);
  }
  catch(err) {
    console.error(`validateEmail：${err.message}`);
    throw new Error("エラーが起こった");
  }
}

// #@@range_begin(list1)
const email = null;

try {
  const validatedEmail = validateEmail(email);
  console.log(validatedEmail);
  if(validatedEmail instanceof Error) {
    console.error(validatedEmail.message);
  } else {
   console.log(`正しい形式のアドレス：${validatedEmail}`);
  }
} catch(err) {
  console.error(`エラー：${err.message}`);
}
// #@@range_end(list1)
