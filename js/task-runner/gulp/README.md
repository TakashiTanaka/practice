# gulpの使い方メモ

## case 1 基本的な使い方
## 基本的な流れ
1. npmでパッケージをインストール
1. gulpfile.jsを作ってタスクを記述
1. npx gulpで実行（npm scriptでも良い）
1. タスク名をdefault以外に指定している場合はnpx gulp （タスク名）で実行する

## その他
gulp.watch('監視するファイル', 処理)で自動的に変更を検知してタスクを実行してくれる

task()メソッドを使った書き方は非推奨となっているため、新規のプロジェクトの場合はmodule機能を使った書き方を採用する方が良い

## 参考
[絶対つまずかないGulp 4入門\(2021年版\) \- インストールとSassを使うまでの手順 \- ICS MEDIA](https://ics.media/entry/3290/)

## case 2 gulp-sass-glob-use-forwardのテスト

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

## case3 gulpのdest\()でファイルをコピーする
単純なコピーであればdestで済むこと事がわかった

## case4 gulp-cleanのテスト
gulp-cleanを使えば指定のフォルダ、ファイルを削除できることがわかった

## case5 画像ファイルに変更があった時に出力先のディレクトリ内を削除してコピーする

## case6 destでディレクトリ構造をキープしたままコピーするテスト
case 3と同様の設定でできた