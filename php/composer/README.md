# Composerのテスト

ComposerはPHPの依存関係管理のツール
npmのようなもの
Composerを実行するためにはPHP5.3.2以降が必要

## 使用するための流れ
- カレントディレクトリにcomposerをインストール
	次のコマンドを実行する
	```
	php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
	php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
	php composer-setup.php
	php -r "unlink('composer-setup.php');"
	```
- composer.jsonファイルを作成
- ライブラリのインストール
	`composer install`コマンドを実行する。vendorディレクトリとcomposer.lockが生成される
- ライブラリを読み込む
	ライブラリを使用するには`require 'vendor/autoload.php';`を使用元で記述する

[case1 ]()

## 参考
[Composerの使い方 \- Qiita](https://qiita.com/sano1202/items/50e5a05227d739302761)