const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const gulpConnect = require('gulp-connect-php');
const connectSSI = require('connect-ssi');

const connectSync = done => {
  gulpConnect.server(
    {
      base: './dist/', //出力先のフォルダパス
      stdio: 'ignore',
      port: 3001,
      open: true,
    },
    () => {
      browserSync.init({
        proxy: '0.0.0.0:8000',
        middleware: [
          /*SSI有効*/
          connectSSI({
            baseDir: './dist/',
            ext: '.html',
          }),
        ],
      });
    }
  );
  done();
};

const reload = done => {
  browserSync.reload();
  done();
};

const watchDistDir = () => watch('dist/*.html', reload);

exports.default = series(connectSync, watchDistDir);
