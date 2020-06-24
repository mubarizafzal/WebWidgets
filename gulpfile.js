// npm init
// npm install --save-dev @babel/core @babel/preset-env @babel/cli gulp sass
// npm install browser-sync


// sass --watch --sourcemap=none public/css/style.scss:public/css/main.css
// npx babel --watch public/js/index.js --out-file public/js/main.js --presets=@babel/preset-env
// gulp

// can put last three commands into a sell? multithread?

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch () {
  gulp.watch("./public/index.html").on("change", browserSync.reload);
  gulp.watch("./public/js/main.js").on("change", browserSync.reload);
  gulp.watch("./public/css/main.css").on("change", browserSync.reload);
}

function server () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./public"
    }
  });

  gulp.watch("./public/index.html").on("change", browserSync.reload);
  gulp.watch("./public/js/main.js").on("change", browserSync.reload);
  gulp.watch("./public/css/main.css").on("change", browserSync.reload);
}

var build = gulp.series(server, watch);

gulp.task("default", build);