# プロセスの理解

## それぞれのプロセスの役割

### メインプロセス

Node.js環境で動作。主な目的は`BrowserWindow`モジュールでアプリケーションウィンドウを作成し管理すること。

## レンダラープロセス

ウェブコンテンツのレンダリングを担う。直接Node.jsにはアクセスできない。

## プリロードスクリプト

ウェブコンテンツ読み込み開始前にレンダラープロセス内で実行される。
これはNode.jsのAPIにアクセスできるようにより多くの権限が与えられている。

## コンテキストの分離

プリロードスクリプトとElectronの内部ロジックの両方が
webContentsでロードしたウェブサイトに対して別のコンテキストで実行されることを保証する機能。
なぜ分離する必要があるかというと、セキュリティ的な問題

## コンテキストの分離が有効の時、プリロードスクリプトからレンダラープロセスにAPIを安全に公開する

`contextBridge`モジュールを使用する

```js:preload.js
// コンテキストの分離が有効のプリロード
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
  doAThing: () => {}
})
```

```js:renderer.js
// レンダラー内から公開された API を使用
window.myAPI.doAThing()
```

## プロセス間通信（Inter-Process Communication）

プロセス間の通信はElectronにおいて必須

`ipcMain`と`ipcRenderer`モジュールで、開発者が定義した「チャンネル」を介して使用する

### レンダラーからメインへ（片方向）

`ipcRenderer.send`APIで送信
`ipcMain.on`APIで受信

## レンダラーからメインへ（双方向）

`ipcRenderer.invoke`
`ipcMain.handle`

## メインからレンダラーへ（片方向）

## 参考

<https://www.electronjs.org/ja/docs/latest/tutorial/process-model>

[プロセスモデル \| Electron](https://www.electronjs.org/ja/docs/latest/tutorial/process-model)
