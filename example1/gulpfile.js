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
            key: 'a99fac2034dbcf8928a1be0a6e08e792',
            snippet: true,
            filter: [3, 31],
            saveOutputIn: 'allHtml.json'
        }));
});
