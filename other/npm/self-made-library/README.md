# NPMで自作ライブラリを作れるのかテスト

会員登録する

```
# お好きなコンソールでログインしてみましょう
# 先ほど会員登録した情報を入力します
$ npm login

# ログインできたか確認するには、以下を実行します
# 自分のnpmユーザー名が表示されれば、ログイン成功です！
$ npm whoami
```

ライブラリの名前を決める

npm init で package.jsonを作って中身を書く

index.jsを書く。公開はnpm publish

## バージョンアップ

npm version patch
npm version minor
npm version major

例えばバージョン1.2.3において、patchバージョンは3、minorバージョンは2、majorバージョンは1。

## 参考

[本当にやさしいnpmライブラリ開発入門 \- Qiita](https://qiita.com/saltyshiomix/items/0306e17cde8f2475f193)
