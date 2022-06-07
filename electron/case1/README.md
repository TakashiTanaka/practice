# electron公式のクイックスタートやってみる

デスクトップアプリを作ってみたかった&業務で活かせそうなのでやってみる

## Node.jsのインストール

省略

## アプリケーション作成

まずはディレクトリを作成・npmのinitで`package.json`を作成。

```bash
mkdir my-electron-app && cd my-electron-app
npm init
```

`package.json`のエントリーポイントは`main.js`にする

## エレクトロンをインストール

`npm install --save-dev electron`

## エレクトロンを実行できるように`package.json`に追記

```json:package.json
{
  "scripts": {
    "start": "electron ."
  }
}
```

`npm start`で実行できるようになる（現状は実行するアプリを作成していないためエラーが発生する）

## `main.js`を作る

Electronのアプリのエントリポイントは`main`スクリプト

## ウェブページの作成

ウィンドウが読み込むコンテンツを作成する。
ルートディレクトリにindex.htmlを作成。

ウェブページをアプリケーションウィンドウに読み込ませるためにモジュールが必要

app, BrowserWindow（詳細は`main.js`を参照）

## ウィンドウのライフサイクルを管理する

OSによってウィンドウの振る舞いが異なる（winとlinuxはウィンドウをすべて閉じるとアプリが終了するなど）

プリロードスクリプトを使ってレンダラーからNode.jsにアクセスする

## メインプロセスとレンダラーのプロセスは異なる

プリロードスクリプトをレンダラーにアタッチする。
プリロードスクリプトはレンダラーのグローバル変数とNode.jsの環境変数どちらにもアクセスできる

## preload.jsというファイルを作る

メインプロセスにpreload.jsを実行する用に記述する

## Electron Forgeでアプリケーションを作成する

## 参考

[はじめに \| Electron](https://www.electronjs.org/ja/docs/latest)
