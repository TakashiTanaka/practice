const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const phpBuiltInServer = done => {
  require('child_process').exec(`php -S 0.0.0.0:8000 ./dist/index.php`);
  require('child_process').exec(`pwd`);
  done();
};

const connectSync = done => {
  browserSync.init({
    proxy: '0.0.0.0:8000',
    reloadOnRestart: true,
    notify: false,
  });
  done();
};

const reload = done => {
  browserSync.reload();
  done();
};

const watchDistDir = () => watch(['dist/*.php', 'view/**/*'], reload);

exports.default = series(phpBuiltInServer, connectSync, watchDistDir);
