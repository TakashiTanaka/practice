// sassファイルをcssに変換するテスト
// reference: https://ics.media/entry/3290/

// ======================================================
// taskメソッドを使った方法
// ======================================================

// 使用するプラグインの読み込み
// const gulp = require("gulp");
// const sass = require("gulp-sass")(require("sass"));

// gulp.task('タスク名', 実行される処理)
// タスク名をdefaultにすると、タスク実行時のタスク名を省略できる
// 実行処理にはreturnをつける
// gulp.task("default", function () {
// 	return gulp.watch("css/style.scss", function () {
// 		return (
// 			gulp
// 				.src("css/style.scss") // タスクの対象となるファイルの取得
// 				.pipe(
// 					sass({
// 						outputStyle: "expanded" // 出力スタイルをオプションで指定
// 					})
// 				) // 処理をつなげる
// 				.pipe(gulp.dest("css")) // 処理を行ったファイルを指定の場所に保存
// 		);
// 	});
// });

// ======================================================
// taskメソッドを使った方法
// ======================================================

// 使用するプラグインの読み込み
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// sassをコンパイルするタスク
const compileSass = () => {
	src("css/style.scss")
		.pipe(
			sass({
				outputStyle: "expanded"
			})
		)
		.pipe(dest("css"));
}

// sassファイルを監視し、変更があったらcompileSassを実行する
const watchSassFiles = () => watch("css/style.scss", compileSass);

// npx gulpで実行したときにwatchsassFilesが実行される
exports.default = watchSassFiles;