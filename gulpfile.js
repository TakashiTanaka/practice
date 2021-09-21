// 使用するプラグインの読み込み
const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const pug = require("gulp-pug");

// pugをコンパイルするタスク
const compilePug = done => {
	src("./src/index.pug")
		.pipe(pug({ pretty: true }))
		.pipe(rename("README.md"))
		.pipe(dest("./"));
	done();
}

exports.pug = compilePug;