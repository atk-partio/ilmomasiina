var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templates', function () {
  gulp.src('./app/modules/**/**/*.html')
    .pipe(templateCache('templates.js', {standalone: true}))
    .pipe(gulp.dest('./app/modules'));
});