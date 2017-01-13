const users = ["mary", "nick", "arthur", "sam", "yvette"];
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
console.log(userRegex); // /@(?:mary|nick|arthur|sam|yvette)\b/g
 /* 「?:」（キャプチャなしのグループの指定）はなくても結果は同じだが、少し効率がよい */

const text = "User @arthur started the backup and 15:15, " +
	     "and @nick and @yvette restored it at 18:35.";
console.log(text.match(userRegex)); // [ "@arthur", "@nick", "@yvette" ]


const users2 = ["浦島太郎", "一寸法師", "桃太郎", "金太郎", "かぐや姫"];
const userRegex2 = new RegExp(`(?:${users2.join('|')})`, 'g');
console.log(userRegex2); // /(?:浦島太郎|一寸法師|桃太郎|金太郎|かぐや姫)/g

const text2 = "浦島太郎がバックアップを開始（15:15）\n" +
              "かぐや姫と金太郎がリストア（18:35）\n";
console.log(text2.match(userRegex2)); // [ '浦島太郎', 'かぐや姫', '金太郎' ]
