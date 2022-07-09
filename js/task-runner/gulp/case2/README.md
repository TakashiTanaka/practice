# case 2 gulp-sass-glob-use-forwardのテスト

1. npm init -y, gulp, gulp-sass-glob-use-forwardのインストール
1. gulpfile.jsを作る
	```
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
	```

1. package.jsonのscriptに`"watch": "gulp"`を追記

1. `npm run watch`で実行

### 参考
[gulp\-sass\-glob\-use\-forward \- npm](https://www.npmjs.com/package/gulp-sass-glob-use-forward)
