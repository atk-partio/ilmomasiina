var changed    = require('gulp-changed');
var gulp       = require('gulp');
//var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './build/app/images';

  return gulp.src('../public/app/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    //.pipe(imagemin())  // Optimization not currently working due to dependency issue
    .pipe(gulp.dest(dest))
});
