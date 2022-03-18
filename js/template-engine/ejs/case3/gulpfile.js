/* EJSをコンパイル */
const { src, dest, watch } = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const debug = require('gulp-debug');
const tap = require('gulp-tap');

/**
 * 各種情報（globも可）
 * @type {{ srcDir:string, destDir:string, watchFiles:Array, watchFiles:String }}
 */
const option = {
  srcDir: `src/ejs`,
  destDir: `dist`,
  watchFiles: [`src/**/*.ejs`],
};

const compileToHtml = data => ejs({ test: data }, { ext: '.html' });

/* EJSのファイル郡をコンパイル */
const compileEJSFiles = done => {
  src([`${option.srcDir}/**/*.ejs`, `!${option.srcDir}/**/_*.ejs`])
    .pipe(plumber())
    // .pipe(tap((file, t) => console.log(file.path)))
    .pipe(compileToHtml())
    .pipe(rename({ extname: '.html' }))
    .pipe(dest(option.destDir));
  done();
};

/* srcのEJSファイルを監視し、変更があったらcompileEJSFilesを実行 */
const watchEJSFiles = () => watch(option.watchFiles, compileEJSFiles);

/* タスクのエクスポート */

// EJSファイルの監視
exports.watchEJSFiles = watchEJSFiles;

// EJSファイルのコンパイル
exports.compileEJSFiles = compileEJSFiles;
