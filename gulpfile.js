var gulp = require('gulp');
var obfuscate = require('gulp-obfuscate');

gulp.task('default', function () {
    console.log('default task');
    return gulp.src('./javascripts/main.js')
        .pipe(obfuscate())
        .pipe(gulp.dest('./javascripts'));
});
