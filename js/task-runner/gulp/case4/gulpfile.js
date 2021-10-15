const { src } = require('gulp');
const clean = require('gulp-clean');

const cleanFile = (done) => {
  src('./dist/*', { read: false }).pipe(clean());
  done();
};

exports.default = cleanFile;
