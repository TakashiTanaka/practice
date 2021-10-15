const { src, dest, series, parallel, watch } = require('gulp');
const clean = require('gulp-clean');
const changed = require('gulp-changed');

// ファイルの削除
const cleanFile = (done) => {
  src('./dist/*', { read: false }).pipe(clean());
  done();
};

// imgファイルのコピー
const copyImgFile = (done) => {
  src('./img/*').pipe(changed('./dist/')).pipe(dest('./dist/'));
  done();
};

// ファイルの変更が検知されたら実行するタスクをまとめる
const watchChangeFiles = (done) => {
  watch('./img/*', series(cleanFile, copyImgFile));
  done();
};

exports.default = series(cleanFile, parallel(copyImgFile, watchChangeFiles));
