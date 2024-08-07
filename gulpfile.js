const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const purgecss = require("gulp-purgecss");

function buildStyles() {
  return (
    src("**/*.scss")
      .pipe(sass())
      // .pipe(purgecss({ content: ["*.html", "*.jsx"] }))
      .pipe(dest("css"))
  );
}

function watchTask() {
  watch(["**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
