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

const log = new Logger("船長の航海日誌");
Object.seal(log);
console.log(Object.isSealed(log)); // true

log.name = "船長の退屈な航海日誌"; /* これはOK */
log.add("またまた退屈な日だ..."); /* これもOK */

log.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible
/* この下を試すには上の文をコメントアウトしてください（以下同様）*/

log.name = 'テスト'; /* OK */

delete log.name;
// TypeError: Cannot delete property 'name' of [object Object]

Object.defineProperty(log, 'log', { enumerable: false });
// TypeError: Cannot redefine property: log
