let room1 = "会議室A"; // "会議室A"はリテラル
console.log(room1);  // 「会議室A」が出力される
let currentRoom = room1; // これでcurrentRoomにはroom1と同じ値（"会議室A"）が入る
console.log(currentRoom); // 「会議室A」が出力される
let nextRoom = 会議室A; // エラーになる。「ReferenceError: 会議室A is not defined」
// 会議室Aは引用符で囲まれていないのでリテラルではないし、変数でも定数でもない。
