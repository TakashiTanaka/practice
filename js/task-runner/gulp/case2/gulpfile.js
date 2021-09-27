const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const bulkSass = require('gulp-sass-glob-use-forward');

// sassをコンパイルするタスク
const compileSass = done => {
	src('src/sass/style.scss')
		.pipe(bulkSass())
		.pipe(
			sass({
				includePaths: ['src/sass']
			}))
		.pipe(dest('./dist/css/'));
	done();
}

// sassファイルを監視し、変更があったらcompileSassを実行する
const watchSassFiles = () => watch("src/sass/**/*.scss", compileSass);

// npx gulpで実行したときにwatchsassFilesが実行される
exports.default = watchSassFiles;