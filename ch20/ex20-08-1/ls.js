const exec = require('child_process').exec;

const command = "ls" // Windowsの場合 dir
exec(command, function(err, stdout, stderr) {
  if(err) return console.error(`実行エラー ${command}`);
  stdout = stdout.toString(); // バッファを文字列に変換
  console.log(stdout);
  stderr = stderr.toString();
  if(stderr !== '') {
    console.error('error:');
    console.error(stderr);
  }
});
