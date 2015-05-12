var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gtenon = require('gulp-tenon-client');


gulp.task('watch', ['tenon'], function() {
    gulp.src('*.html')
        .pipe(watch('*.html'))
        .pipe(gulp.dest('.'));
});

gulp.task('tenon', function() {
    gulp.src('*.html', {
            read: false
        })
        .pipe(gtenon({
            key: 'YOUR TENON KEY',
            snippet: true,
            filter: [3, 31],
            saveOutputIn: 'allHtml.json'
        }));
});
