var gulp = require('gulp');

gulp.task('watch', ['useWatchify', 'browserify'], function() {
  gulp.watch('scss/**', ['sass']);
  gulp.watch('images/**', ['images']);
});