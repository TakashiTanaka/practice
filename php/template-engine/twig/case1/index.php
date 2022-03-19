<?php
// require_onceでautoload.phpを読み込む
require_once __DIR__ . '/vendor/autoload.php';

// twigのテンプレートの場所を指定するTwig_Loader_Filesystem
// データを流し込みたいhtmlやphpのディレクトリの場所を指定する
$loader = new \Twig\Loader\FilesystemLoader('./view');

// Twigオブジェクトのインスタンスを作成する
$twig = new \Twig\Environment($loader);

// サイトに送るデータ
$SITE_DATA = [
	'name' => 'tom',
	'title' => 'Test page'
];

// テンプレートにデータを送る
echo $twig->render('index.html', $SITE_DATA);
