<?php

// ルートディレクトリのパス
$root = realpath("../");

// Twigライブラリの読込み
require_once "$root/vendor/autoload.php";

// Twigを使用するテンプレートの読込み
$loader = new \Twig\Loader\FilesystemLoader("$root/view");
$twig = new \Twig\Environment($loader);

// htmlに渡すデータ
$data = [
  'title' => 'MyTitle',
  'message'  => 'MyMessage',
];

// テンプレートのレンダリング
echo $twig->render('index.html.twig', $data);
