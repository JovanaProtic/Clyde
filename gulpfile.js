const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Watch and Serve
gulp.task('serve', ['sass'], function () {
    gulp.watch(['src/sass/*.scss'], ['sass']);
});