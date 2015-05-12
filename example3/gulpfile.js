var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    del = require('del'),
    gtenon = require('gulp-tenon-client');

gulp.task('webserver', ['run'], function() {
    gulp.src('./dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: false,
                path: 'dist'
            },
            open: true,
            fallback: './dist/index.html'
        }));
});

gulp.task('jade', function() {
    gulp.src('src/**/*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src('src/img/*.png')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});


gulp.task('watch', function() {
    gulp.watch('src/**/*.jade', ['jade', 'tenon']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/img/*.png', ['images']);
});

gulp.task('run', function() {
    runSequence('clean', 'jade', 'sass', 'images', 'watch', 'tenon');
});

gulp.task('clean', function(cb) {
    del([
        'dist/**',
    ], cb);
});


gulp.task('tenon', function() {
    gulp.src('dist/*.html', {
            read: false
        })
        .pipe(gtenon({
            key: 'YOUR TENON KEY',
            snippet: true,
            filter: [3, 31],
            saveOutputIn: 'allHtml.json'
        }));
});
