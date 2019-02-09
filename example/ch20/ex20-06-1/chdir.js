console.log(`現在のディレクトリ：${process.cwd()}`);
process.chdir(__dirname); // プログラムが起動されたディレクトリへ移動
console.log(`新しいCWDディレクトリ: ${process.cwd()}`);
