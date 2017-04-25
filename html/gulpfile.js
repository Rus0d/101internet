var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    browserSync = require('browser-sync');

gulp.task('default',['stylesCompiler', 'watch', 'browserSync']);

gulp.task('stylesCompiler', function () {

    return gulp.src('styles/styleConstructor.scss')
           //.pipe(concatCss("styles.css"))
           .pipe(sass().on('error', sass.logError))
           .pipe(rename("styles.css"))
           .pipe(autoprefixer({ browsers: ["> 0%"] }))
           .pipe(minifyCss())
           .pipe(gulp.dest('dist/styles'))
           .pipe(browserSync.reload({stream:true}))
           .pipe(notify('styles.css done!!!'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('html', function () {
    gulp.src('dist/*.html')
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch(['styles/*', 'dist/*.html'], ['stylesCompiler', 'html']);
});
