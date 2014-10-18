var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
  gulp.src('scripts/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('public'));
});