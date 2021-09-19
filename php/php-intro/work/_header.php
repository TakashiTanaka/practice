<?php
// $message = 'こんにちは！' . date('l');

$title='';

$n = mt_rand(1, 3); //ランダムな値を生成する

// $nの値でメッセージの内容を変える
if ($n === 1) {
  $message = '<script>alert("please escape!!");</script>uxデザイナー見習いです。';
} elseif ($n === 2) {
  $message = 'プログラミング勉強中です。';
} else {
  $message = 'phpちょっとわかります';
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <title><?= htmlspecialchars($title, ENT_QUOTES, 'utf-8') ?> 太郎のポートフォリオサイト</title>
  <link rel="icon" href="favicon.ico">
  <meta name="description" content="太郎のポートフォリオサイトです。">
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>
  <header>
    <div class="container">
      <div class="icon">
        <img src="img/taro.png" width="120" height="120" alt="太郎のアイコンです">
      </div>
      <div class="info">
        <h1>山田太郎</h1>
        <!-- htmlspecialchars関数でエスケープしている -->
        <p><?= htmlspecialchars($message, ENT_QUOTES, 'utf-8'); ?></p>
        <ul>
          <li>
            <a href="https://dotinstall.com" target="_blank">
              <img src="img/blog.png" width="20" height="20" alt="ブログサイトへのリンク画像です">
            </a>
          </li>
          <li>
            <a href="https://dotinstall.com" target="_blank">
              <img src="img/photos.png" width="20" height="20" alt="写真サイトへのリンク画像です">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <section class="works">
    <h1>WORKS</h1>