var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    webpack = require('webpack-stream'),
    named = require('vinyl-named');
    
gulp.task('styles', function() { 
  return sass('src/sass/**/*.scss',{ style: 'expanded' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('teststyles', function() { 
  return sass('src/sass/**/*.scss',{ style: 'expanded' })
    .pipe(concat('all.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() { 
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('webpackScripts', function() { 
  return gulp.src('src/js/entry.js')
    // .pipe(named())
    .pipe(webpack({
      // devtool: 'source-map'
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() { 
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() { 
  return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
    .pipe(clean());
});

gulp.task('watch', function() {
// 看守所有.scss档
  gulp.watch('src/sass/**/*.scss', ['teststyles']);
 
  // 看守所有.js档
  gulp.watch('src/js/**/*.js', ['webpackScripts']);
 
  // 看守所有图片档
  // gulp.watch('src/img/**/*', ['images']);
  // 建立即时重整伺服器
  livereload.listen();

  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  // document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')
  gulp.watch(['dist/**']).on('change', function(file) {

    livereload.changed(file.path);
  });
 
});