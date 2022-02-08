const { series, parallel, watch } = require('gulp');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));;
//sass.compiler = require('sass');



function clean(cb) {
  // body omitted
  cb();
  
}

function css(cb) {
  // body omitted
  watch('src/scss/*.scss', { ignoreInitial: false }, function(cb) {
    // body omitted
    gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    cb();
  });
}


function javascript(cb) {
    // body omitted
    watch('src/widgets/*.js', { ignoreInitial: false }, function(cb) {
      // body omitted
      gulp.src('./src/widgets/*.js')
      .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
      cb();
    });
  }



exports.build = series(clean, parallel(css, javascript));