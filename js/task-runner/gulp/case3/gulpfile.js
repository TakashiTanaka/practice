const { src, dest } = require('gulp');

const copyFile = (done) => {
  src('./img/*').pipe(dest('./dist/'));
  done();
};

exports.default = copyFile;
