'use strict';

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('jquery.pixlayout.js')
    .pipe(uglify())
    .pipe(rename('jquery.pixlayout.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('watch', ['js'], function () {
  gulp.watch('jquery.pixlayout.js', ['js']);
});

gulp.task('default', ['watch'], function () {});