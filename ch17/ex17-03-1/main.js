const input = "As I was going to Saint Ives";
            // 01234567891123456789212345678
const re = /\w{3,}/ig;

/* 入力文字列（input）のメソッド */
console.log(input.match(re)); // [ 'was', 'going', 'Saint', 'Ives' ]
                              // （マッチした単語を配列にして返す）
console.log(input.search(re)); // 5 （最初に見つかるものは5文字目から始まる）

/* 正規表現（re）のメソッド */
console.log(re.test(input)); // true  （inputはreにマッチする）

let a = re.exec(input); /* execは文字位置を記憶する */
console.log(a); // [ 'going', index: 9, input: 'As I was going to Saint Ives' ]
console.log(a[0]); // going
console.log(a.index); // 9    （9文字目からの文字列）
console.log(a.input); // As I was going to Saint Ives
console.log(a[1]); // undefined

console.log(re.exec(input));
// [ 'Saint', index: 18, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); 
// [ 'Ives', index: 24, input: 'As I was going to Saint Ives' ]
console.log(re.exec(input)); // null   （もうマッチするものがない）

// 正規表現のリテラルを直接使うこともできる
console.log(input.match(/\w{3,}/ig)); // [ 'was', 'going', 'Saint', 'Ives' ]
console.log(input.match(/\w{3,}/i)); // gオプションなし。先頭のマッチを返す
// [ 'was', index: 5, input: 'As I was going to Saint Ives' ]
console.log(input.search(/\w{3,}/ig)); // 5
