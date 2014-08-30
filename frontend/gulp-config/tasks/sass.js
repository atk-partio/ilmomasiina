var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handle-errors');
var browserSync  = require('browser-sync');

gulp.task('sass', ['images'], function () {
  return gulp.src('./sass/*.{sass, scss}')
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(gulp.dest('./../public/'));
});
