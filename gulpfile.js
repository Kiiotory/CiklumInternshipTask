var gulp = require('gulp'),
  rename = require("gulp-rename"),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  uncss = require('gulp-uncss'),
  sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/css'));
});

// gulp.task('uncss', function () {
//     return gulp.src('app/css/style.min.css')
//         .pipe(uncss({
//             html: ['app/index.html']
//         }))
//         .pipe(gulp.dest('app/css'));
// });


gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['default'])
})
