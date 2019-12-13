const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const pm2 = require("pm2");

gulp.task("start", ["build"], function() {
  return nodemon({ script: "index.js" });
});

gulp.task("production", ["build"], function() {
  return pm2.connect(true, function(err) {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    pm2.start({
      name: "PROJECT_DAVID",
      script: "index.js",
      exec_mode: "cluster", // Allow your app to be clustered
      instances: 1, // put max to scale
      max_memory_restart: "1000M", // restarts at 1000m
      function(err, apps) {
        pm2.disconnect(); // Disconnect from PM2
        if (err) {
          throw err;
        }
      }
    });
  });
});
