var browserSync = require('browser-sync');
var gulp        = require('gulp');

// Build task is ran before browser sync
gulp.task('browserSync', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: ['./../public']
    }
  });
});
