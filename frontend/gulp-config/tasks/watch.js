var gulp = require('gulp');

gulp.task('watch', ['useWatchify', 'browserify'], function() {
  gulp.watch('sass/**', ['sass']);
  gulp.watch('images/**', ['images']);
});