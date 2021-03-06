const gulp = require("gulp");
const webpack = require("webpack");
const config = require("../webpack.config");

gulp.task("build", function(callback) {
  return webpack(config, callback);
});

gulp.task("build:watch", function() {
  return gulp.watch(["/server/devasset/js/*.js"], ["build"]);
});
