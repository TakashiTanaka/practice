const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const connectSync = done => {
  require('child_process').exec(`php -S 0.0.0.0:8000 ./dist/index.html`);
  browserSync.init({
    proxy: '0.0.0.0:8000',
    reloadOnRestart: true,
  });
  done();
};

const reload = done => {
  browserSync.reload();
  done();
};

const watchDistDir = () => watch('dist/*.html', reload);

exports.default = series(connectSync, watchDistDir);
