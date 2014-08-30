var gulp = require('gulp');

gulp.task('index', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./../public'));
});
