/* eslint-env node */

var gulp = require('gulp');
var serve = require('gulp-serve');
var eslint = require('gulp-eslint');

var sourceFiles = ['hbp.hello.js'];

gulp.task('serve', serve({
  root: ['example', '.'],
  port: 8443,
  https: true
}));

gulp.task('lint', function() {
  return gulp.src(sourceFiles.concat(['gulpfile.js']), {base: '.'})
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', ['lint']);

gulp.task('watch', function() {
  gulp.watch(sourceFiles, ['test']);
});

gulp.task('default', ['watch', 'test']);
