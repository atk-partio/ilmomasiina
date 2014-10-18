var gulp = require('gulp');

gulp.task('index', function() {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./../public'));
});
