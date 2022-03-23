const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

const imageMin = done => {
  src('./src/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('./dist'));
  done();
};

module.exports.default = imageMin;
