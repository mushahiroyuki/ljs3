// プロジェクトルートの gulpfile.js
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');            // この行を追加

gulp.task('default', function() {
  // ESLintを実行
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"]) // この行を追加
    .pipe(eslint())                               // この行を追加
    .pipe(eslint.format());                       // この行を追加
  // Nodeのソース
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  // ブラウザのソース
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
