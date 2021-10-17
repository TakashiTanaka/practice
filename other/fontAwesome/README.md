# FontAwesomeのテスト
FontAwesomeの使い方を勉強しました。

## 使い方
- お手軽に使うならCDN版
- npmの場合
	- 無料バージョンのパッケージをインストールする
		npm install --save @fortawesome/fontawesome-free
	参考：[Using a Package Manager \| Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers)

## 試した方法
- [case1 nodemodulesからコピペして雑に使う](./case1/index.html)
webfontsフォルダとall.cssをコピーして、htmlのヘッドでcssを読み込む

- [case2 sassを使って読み込む](./case2/index.html)
エントリーポイントのscssを作って、そこでnode_modules下のscssファイルをインポートし、cssにコンパイルする。また、webfontsは必要なのでコピペする。この方法だと吐き出されたcssは59kbぐらい。

- [case3 jsのバンドル時にインポートする](./case3/index.html)
エントリーポイントのjsを作って、そこでall.jsをインポートする。webpackでビルド。この方法だと1.2mbぐらいのjsが吐き出される。ちょっと重い

- [case4 jsのバンドル時にインポートする](./case4/index.html)
エントリーポイントのjsを作って、そこでfontawesome.jsとbrands.jsのみインポート。webpackでビルド。この方法だったら、400kbぐらいまでになった

- [case5 svgコア版を使う](./case5/index.html)
さらに軽くするためにsvg-core版を使う。さらに、使用するフォントのタイプのjsを読み込む。その上でwebpackでビルド。これだと38kbになった。
参考：[1年後に差がつくFont Awesome5 ～フロントエンド開発\(ES6,Webpack4,Babel7\)への導入～ \- Qiita](https://qiita.com/riversun/items/4faa56ac40071f638313)