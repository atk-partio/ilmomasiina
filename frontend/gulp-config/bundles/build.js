var gulp = require('gulp');

var tasks = ['templates', 'browserify', 'sass', 'images', 'index']
gulp.task('build', tasks)
gulp.task('heroku:production', tasks)