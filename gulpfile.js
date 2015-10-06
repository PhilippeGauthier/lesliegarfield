var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var babelify = require("babelify");
var envify = require("envify");
var sourcemaps = require("gulp-sourcemaps");
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var markdown = require('gulp-markdown-to-json');
var convert = require('gulp-convert');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var reload_page = livereload.changed;

var path = {
  HTML: 'src/default.html',
  HTML_COPY: 'statamic/_themes/main/layouts',
  MINIFIED_OUT: 'main.min.js',
  OUT: 'main.js',
  DEST: 'statamic/_themes/main',
  DEST_BUILD: 'statamic/_themes/main/js',
  DEST_SRC: 'statamic/_themes/main/js',
  ENTRY_POINT: './src/js/App.js',
  SCSS: 'src/scss/**/*.scss',
  SCSS_ENTRY: 'src/scss/main.scss',
  SCSS_BUILD: 'statamic/_themes/main/css',
  CSS_MINIFIED_OUT: 'main.min.css',
  ASCENT_IN: 'statamic/admin/themes/ascent/scss/',
  ASCENT_DIST: 'statamic/admin/themes/ascent/dist',
  ASCENT_OUT: 'statamic/admin/themes/ascent/css',
  MKDN_SRC_NEW_YORK: 'statamic/_content/1-properties/new-york',
  MKDN_SRC_INTER: 'statamic/_content/1-properties/international',
  MKDN_EXCLUDE: '{/sold,/sold/*.md,/leased,/leased/*.md,/**/page.md}',
  PROP_SALE: '/sale',
  PROP_RENT: '/lease',
  JSON: 'statamic/JSON/'
};

var mark = ['statamic/_content/1-properties/lease/*.md','statamic/_content/1-properties/sale/*.md'];

gulp.task('markdown', function(){
  gulp.src([path.MKDN_SRC_NEW_YORK + '/**/*.md','!'+ path.MKDN_SRC + path.MKDN_EXCLUDE])
    .pipe(gutil.buffer())
    .on('error', function(err){ console.log(err.message); })
    .pipe(markdown('properties.json'))
    .pipe(gulp.dest(path.JSON))
});

gulp.task('markdown-international', function(){
  gulp.src([path.MKDN_SRC_INTER + '/**/*.md','!'+ path.MKDN_SRC_INTER + '/page.md'])
    .pipe(gutil.buffer())
    .on('error', function(err){ console.log(err.message); })
    .pipe(markdown('properties-international.json'))
    .pipe(gulp.dest(path.JSON))
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.HTML_COPY));
});

gulp.task('sass', function () {
  gulp.src(path.SCSS_ENTRY)
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass())
    .pipe(gulp.dest(path.SCSS_BUILD));
});

gulp.task('sass_ascent', function () {
  gulp.src(path.ASCENT_IN + 'ascent.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass())
    .pipe(gulp.dest(path.ASCENT_DIST));
});

gulp.task('ascent-minify-css', function() {
  return gulp.src(path.ASCENT_DIST + '/*.css')
    .pipe(minifyCss())
    .pipe(rename("ascent.min.css"))
    .pipe(gulp.dest(path.ASCENT_OUT));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(path.HTML, ['copy']);
  gulp.watch([path.MKDN_SRC_NEW_YORK + '/sale/*.md',path.MKDN_SRC + '/lease/*.md'], ['markdown']);
  gulp.watch([path.MKDN_SRC_INTER + '/*.md'], ['markdown-international']);
  gulp.watch(path.SCSS, ['sass']);
  gulp.watch([path.DEST + '/**/*.*'], reload_page);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': {
        src: null,
        tpl: '<script src="{{ theme:js src="main.min.js" }}"></script>'
      },
      'css': {
        src: null,
        tpl: '<link rel="stylesheet" href="{{ theme:css src="main.min.css" }}" />'
      }
    }))
    .pipe(gulp.dest(path.HTML_COPY));
});

gulp.task('minify-css', function() {
  return gulp.src(path.SCSS_BUILD + '/*.css')
    .pipe(minifyCss())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest(path.SCSS_BUILD));
});

gulp.task('watchProduction', function() {
  gulp.watch(path.MKDN_SRC + '/**/*.md', ['markdown']);
});

gulp.task('production', ['replaceHTML', 'minify-css', 'build']);

gulp.task('default', ['copy','watch']);

