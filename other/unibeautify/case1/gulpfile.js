const { src, dest } = require('gulp');
const gulpPrettyDiff = require('gulp-prettydiff');

const test = done => {
  src('src/index.html')
    .pipe(
      gulpPrettyDiff({
        lang: 'twig',
        mode: 'beautify',
        indent_char: ' ',
        indent_size: '2',
      })
    )
    .pipe(dest('dest'));
  done();
};

module.exports.default = test;
