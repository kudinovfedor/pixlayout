'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

gulp.task('js', () => {
    return gulp.src('jquery.pixlayout.js')
        .pipe(uglify())
        .pipe(rename('jquery.pixlayout.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', gulp.series('js', () => {
    gulp.watch('jquery.pixlayout.js', gulp.series('js'));
}));

gulp.task('default', gulp.parallel('watch', () => {

}));
