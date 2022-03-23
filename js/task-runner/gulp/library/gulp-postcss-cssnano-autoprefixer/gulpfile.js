const postcss = require('gulp-postcss');
const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// CSSの圧縮
const minifyCSS = () => postcss([cssnano()]);

// ベンダープレフィクスを自動付与（IEに対応するためにgridのオプションを付与）
const prefixCSS = () => postcss([autoprefixer({ grid: 'autoplace' })]);

// メインプロセス
const process = done => {
  src('./src/style.css').pipe(prefixCSS()).pipe(minifyCSS()).pipe(dest('./dest'));
  done();
};

// エクスポート
module.exports.default = process;
