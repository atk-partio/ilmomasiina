var gulp = require('gulp');

gulp.task('watch', ['watchify', 'browserify'], function() {
  gulp.watch('./app/styles/**', ['sass']);
  gulp.watch('./app/images/**', ['images']);
});