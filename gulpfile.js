var gulp = require('gulp');
var less = require('gulp-less');
var htmlbeautify = require('gulp-html-beautify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var usemin = require('gulp-usemin');
// var uglify = require('gulp-uglify');

// html 部分
gulp.task('html', () => {
    return gulp.src('./src/ui.html')
        .pipe(usemin({
            html: [htmlbeautify({
                "max_preserve_newlines": 0
            })],
            inlinecss: [less(), autoprefixer(), cleanCSS(), 'concat']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dev', ['html'], () => {
    gulp.watch(['./src/ui.html', './src/style.less', './src/script.js'], ['html']);
})
gulp.task('build', ['html']);
