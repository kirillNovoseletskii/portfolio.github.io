var gulp = require('gulp'),
    sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('./scss/styles.scss')
  .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
  .pipe(gulp.dest('./css'));
});   
gulp.task('watch',function(){
  gulp.watch(['sass/**/*.scss','sass/**/*.sass'],['sass']);
});
gulp.task('default',['watch']);
