/* Node.jsで実行 */
const fs = require('fs');
function readSketchyFile() { /* sketchy: 怪しげな, 疑わしい */
  try {
    fs.readFile('does_not_exist.txt', function(err, data) {
      if(err) throw err;
      else console.log('無事読み込めました')
    });
  } catch(err) {
    console.log('警告：マイナーな問題が発生。実行を継続します');
  }
}

readSketchyFile();

/* 実行結果
      if(err) throw err;
              ^
Error: ENOENT: no such file or directory, open 'does_not_exist.txt'
*/
