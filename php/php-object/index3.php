<?php

// 外部ファイルの読み込み

// require('Post.php'); // 読み込めなかったときにエラー
// include('Post.php'); // 読み込めなくても処理が止まらない

// _onceをつけると、既に読み込まれている場合スキップしてくれる
// require_once('Post.php');
// include_once('Post.php');

// autoload
// クラスが多くなってくると読み込むのが大変
// sql_autoload_registerを使うと、newをしたクラスが読み込まれていなかったら、
// そのクラス名を引数として受け取る関数を実行してくれる
// 下記の例の場合、'Post'という文字列を引数に取るはずなので、
// それをつかってrequireする
spl_autoload_register(function ($class) {
	require($class . '.php');
});

$posts[0] = new Post('hello');
$posts[1] = new Post('hello again');

foreach ($posts as $post) {
	$post->show();
}
