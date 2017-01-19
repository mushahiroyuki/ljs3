// 例題を ES5（少し前のブラウザがサポートしている標準）に変換
// 変換後のファイルを  example-es5 に入れる
//
// 次を実行して、gulp-plumberをインストールしておいてください。
//   （タスクでエラーが起きても停止させないためのモジュール。
//     一部の例には故意にエラーが含まれているため）
// npm install gulp-plumber --save-dev
//
// それから 次を実行します。
// gulp

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

// Gulpの依存関係をここに記述
gulp.task('default', function() {
	gulp.src(["!example/**/*.js", "!example/index.html", "!example/index-sub.html", "example/**/*"])
		.pipe(gulp.dest("example-es5"))  // 単純なコピー

	gulp.src("example/**/*.js")  // JSファイルを対象
		.pipe(plumber()) // エラーが起こっても途中でやめない
 		.pipe(babel())  // ES5への変換
 		.pipe(gulp.dest("example-es5")) // 結果の書き出し先

});
