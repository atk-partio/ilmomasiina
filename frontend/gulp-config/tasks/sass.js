var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var handleErrors = require('../util/handle-errors');

gulp.task('sass', ['images'], function () {
  return gulp.src('./app/styles/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .on('error', handleErrors)
    .pipe(gulp.dest('./../public/'));
});
