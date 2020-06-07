"use strict";

const gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  htmlmin = require("gulp-htmlmin"),
  sourcemap = require("gulp-sourcemaps"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  csso = require("gulp-csso"),
  rename = require("gulp-rename"),
  svgstore = require("gulp-svgstore"),
  del = require("del"),
  autoprefixer = require("autoprefixer"),
  server = require("browser-sync").create(),
  webp = require("gulp-webp"),
  imagemin = require("gulp-imagemin"),
  imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  pngquant = require("imagemin-pngquant"),
  terser = require('gulp-terser');

gulp.task("dev-css", () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("css", () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
});

gulp.task("server", () => {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});

gulp.task('js', () => {
    return gulp.src(["source/js/*.js", "!source/js/*.min.js"])
      .pipe(terser({
        keep_fnames: true,
        mangle: false
      }))
      .pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest('build/js'))
  }
);

gulp.task("images", () => {
  return gulp.src("source/img/111/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress(),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: "65-70", speed: 5})
    ], {
      verbose: true
    }))
    .pipe(gulp.dest("source/img/222"))
});

gulp.task("webp", () => {
  return gulp.src("source/img/webp/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img/webp"))
});

gulp.task("sprite", () => {
  return gulp.src("source/111/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"))
});

gulp.task("html", () => {
  return gulp.src("source/*.html")
  .pipe(gulp.dest("build"))
});

gulp.task("minhtml", () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/*.min.js",
    "source/*.ico"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
});

gulp.task("copySprite", function () {
  return gulp.src("source/img/sprite.svg")
    .pipe(gulp.dest("build/img"))
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("watch", function () {
gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("dev-css"));
gulp.watch("source/*.html", gulp.series("html")).on("change", server.reload);
gulp.watch("source/js/*.js", gulp.series("js")).on("change", server.reload);
// gulp.watch("source/img/sprite.svg", gulp.series("copySprite", "html")).on("change", server.reload);
});

gulp.task("dev", gulp.series("clean", "copy", "dev-css", "html", "js"));
gulp.task("build", gulp.series("clean", "copy", "css", "minhtml", "js"));
gulp.task("update", gulp.parallel("watch", "server"));
gulp.task("start", gulp.series("dev", "update"));
