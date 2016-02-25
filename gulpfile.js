var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var mqpacker = require('css-mqpacker');
var gutil = require("gulp-util");
var webpack = require("webpack");
// var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var dest = 'dist/';
    
gulp.task('styles', function() { 
  var processors = [
    require('postcss-import')(),
    mqpacker,
    require('postcss-url')(),
    autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'FireFox >= 16', '> 1%'] }),
    // require('postcss-cssnext')()
  ];
  return gulp.src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(dest))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('sassstyles', function() { 
  var processors = [
    require('postcss-import')(),
    mqpacker,
    require('postcss-url')(),
    autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'FireFox >= 16', '> 1%'] }),
    // require('postcss-cssnext')()
  ];
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(dest))
    .pipe(notify({ message: 'Sass Styles task complete' }));
});

gulp.task('scripts', function() { 
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(dest))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('webpackScripts', function(callback) { 
  // run webpack
  var config = Object.create(webpackConfig);
  webpack(config, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          // output options
      }));
      callback();
  });

  // return gulp.src('src/js/entry.js')
  //   .pipe(webpack( require('./webpack.config.js') ))
  //   .pipe(gulp.dest('dist/assets/js'))
  //   .pipe(jshint())
  //   .pipe(jshint.reporter('default'))
  //   // .pipe(concat('main.js'))
  //   .pipe(gulp.dest('dist/assets/js'))
  //   .pipe(rename({suffix: '.min'}))
  //   .pipe(uglify())
  //   .pipe(gulp.dest('dist/assets/js'))
  //   .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('ap', function(){
  return gulp.src('autoprefix/**/*.css')
    .pipe(postcss(
      [ autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] }) ]
    ))
    .pipe(gulp.dest('afterprefix'))
    .pipe(notify({ message: 'prefix task complete' }));
});

gulp.task('images', function() { 
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() { 
  return gulp.src([dest+'/css', dest+'/js'], {read: false})
    .pipe(clean());
});

gulp.task('watch', function() {
// 看守所有.scss档
  gulp.watch('src/sass/**/*.scss', ['sassstyles']);

// 看守所有.css档
  gulp.watch('src/sass/**/*.css', ['styles']);
 
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
  gulp.watch(['**/*.html']).on('change', function(file) {

    livereload.changed(file.path);
  });
});