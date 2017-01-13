// プロジェクトルートの gulpfile.js
const gulp = require('gulp');
const babel = require('gulp-babel'); // この行を追加

gulp.task('default', function() {    // ❶から❻を追加
  // Nodeのソース
  gulp.src("es6/**/*.js")            // ❶
    .pipe(babel())                   // ❷
    .pipe(gulp.dest("dist"));        // ❸
  // ブラウザのソース
  gulp.src("public/es6/**/*.js")     // ❹
    .pipe(babel())                   // ❺
    .pipe(gulp.dest("public/dist")); // ❻
});
