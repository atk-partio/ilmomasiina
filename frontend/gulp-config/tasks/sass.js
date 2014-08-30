var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handle-errors');

gulp.task('sass', ['images'], function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(gulp.dest('./../public/'));
});
