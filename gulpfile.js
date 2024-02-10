
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const sassGlob = require("gulp-sass-glob");
const ejs = require("gulp-ejs");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require("gulp-rename");
const webp = require("gulp-webp");
const minify = require("gulp-clean-css");
const fse = require('node-fs-extra');

const paths = {
    js: './js/**/*.js',
    sass: './scss/**/*.scss',
    css: './css/**/*.css',
    images: './images/**/*.+(jpg|jpeg|png|gif)',
    ejs: './ejs/**/*.ejs',
    html: './**/*.html',
}

const distPaths = [
    './images/**/*.{webp,ico,svg}',
    './css/**/*.css',
    './fonts/**/*',
    './lib/**/*',
    '.htaccess',
    paths.js,
    paths.sass,
    paths.html
]

gulp.task('sass', function () {
    return gulp.src('./scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
});


gulp.task("ejs", () => {
    return gulp
        .src('./ejs/**/!(_)*.ejs')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(ejs())
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest("./"));
});

gulp.task("webp", () => {
    return gulp
        .src(paths.images)
        .pipe(rename((path) => {
            path.basename += path.extname
        }))
        .pipe(webp({quality: 100}))
        .pipe(gulp.dest((file) => {
            return file.base
        }))
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: false,
        }
    });
    gulp.watch(paths.ejs, gulp.series('ejs'));
    gulp.watch(paths.sass, gulp.series('sass'));
    gulp.watch(paths.images, gulp.series('webp'));
    
    gulp.watch(paths.html).on('change', browserSync.reload);
    gulp.watch(paths.css).on('change', browserSync.reload);
    gulp.watch(paths.js).on('change', browserSync.reload);
    gulp.watch(paths.images).on('change', browserSync.reload);
});

gulp.task('clean', async function() {
    return fse.removeSync('dist');
});

gulp.task("dist", () => {
    return gulp
        .src(distPaths, { base: './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('build', gulp.series('sass', 'ejs', 'webp', 'clean', 'dist'));
gulp.task('default', gulp.series('sass', 'ejs', 'webp', 'serve'));