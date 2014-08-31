var gulp = require('gulp');

gulp.task('watch', ['watchify', 'browserify'], function() {
  gulp.watch('scss/**', ['sass']);
  gulp.watch('images/**', ['images']);
});