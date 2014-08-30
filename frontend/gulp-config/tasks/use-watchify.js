var gulp = require('gulp');

gulp.task('useWatchify', function() {
  // Tell browserify to use watchify
  global.isWatching = true;
});
