# Gulpの基本的な使い方

1. npmでパッケージをインストール
1. gulpfile.jsを作ってタスクを記述
1. npx gulpで実行（npm scriptでも良い）
1. タスク名をdefault以外に指定している場合はnpx gulp （タスク名）で実行する

## その他

`gulp.watch('監視するファイル', 処理)`で自動的に変更を検知してタスクを実行してくれる

`task()`メソッドを使った書き方は非推奨となっているため、新規のプロジェクトの場合はmodule機能を使った書き方を採用する方が良い

## 参考

[絶対つまずかないGulp 4入門\(2021年版\) \- インストールとSassを使うまでの手順 \- ICS MEDIA](https://ics.media/entry/3290/)