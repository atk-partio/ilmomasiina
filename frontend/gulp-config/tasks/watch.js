var gulp = require('gulp');

gulp.task('watch', ['useWatchify', 'browserSync'], function() {
  gulp.watch('sass/**', ['sass']);
  gulp.watch('images/**', ['images']);
});
