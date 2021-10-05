# Twigのテスト
Wordpressで使えるようになりたくて勉強してみる
Timberというプラグイン・パッケージを使うとwpでも使えるらしい
TwigはSensio labsが開発したテンプレートエンジン

## インストール
`composer require "twig/twig:^3.0"`でインストール

## 準備
require_onceでautoload.phpを読み込み
twigのテンプレートの場所を指定するTwig_Loader_Filesystem
Twig_Environmentオブジェクトのインスタンスを作成する
renderメソッドでテンプレートの名前とデータをテンプレートに送る
指定したテンプレート側で送られてきたデータを使用する
{{...}}は表示や操作の結果
{%...%}は分岐やループなどの制御構文
## 参考
[PHPでWebアプリ開発！人気テンプレートエンジン「Twig」を使ってみよう – WPJ](https://www.webprofessional.jp/twig-popular-stand-alone-php-template-engine/)