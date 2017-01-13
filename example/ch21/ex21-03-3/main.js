'use strict';
class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now(),
    });
  }
}
// #@@range_begin(list1)
const log2 = new Logger("一等航海士の航海日誌");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2)); // false
log2.name = "一等航海士の退屈な航海日誌"; /* これはOK */
log2.add("またまた退屈な日だ..."); /* これもOK */
console.log(log2);
/* 上の文の結果
Logger {
  name: '一等航海士の退屈な航海日誌',
  log: [ { log: 'またまた退屈な日だ...', timestamp: 1481433493932 } ] }
*/
log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible
/* この下を試すには上の文をコメントアウトしてください */

log2.name = 'テスト'; /* OK */
delete log2.name;  /* OK */
Object.defineProperty(log2, 'log', { enumerable: false }); /* OK */
console.log(log2); // Logger {}
// #@@range_end(list1)
