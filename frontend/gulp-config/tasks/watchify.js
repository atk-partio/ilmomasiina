var gulp = require('gulp');

// Run before browserify task
gulp.task('watchify', function() {
  global.isWatching = true;
});
