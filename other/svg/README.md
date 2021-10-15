# SVGの練習

Scalable Vector Graphics

[case1 基本とサイズの確認など](./case1/index.html)
[case2 ドットインストールで勉強](./case2/index.html)
[case3 SVGOを使ってsvgを最適化 & ハイパーリンク & アニメーション](./case3/index.html)
[case4 マスクを使う](./case4/index.html)
[case5 マスクを使う2](./case5/index.html)

- Viewboxは描画領域をどのくらいの座標空間として捉えるか指定する項目

- 疑問
	- defsは結局なんなのか…
		[SVG1\.1 グループ化について\(g, symbol, defs\) \- はしくれエンジニアもどきのメモ](https://cartman0.hatenablog.com/entry/2015/07/07/013420)

- Illustratorからの書き出し
	- カラーモードはRGB
	- レイヤーパネルで極力命名しておく
		- レイヤー名とレイヤーのグループ名がSVGグループのIDになる
		- シンボル名がSVGシンボルのIDになる
		- グラフィックスタイル名がCSSのクラスになる
	- 極力、line, rect, circleで描く
	- ポイントの数を減らす（単純化など）
	- アートボードを描画に合わせる
	- 同じ図形はシンボル登録してから配置
	- アートボード座標は0,0を基点にする
	- 文字はアウトライン
	- 非表示レイヤーの削除
	- SVGプロファイルはSVG1.1を指定
	- Illustrator編集機能を保持のチェックを外す
	- レスポンシブデザインのチェックを外す
- 書き出し後のあれこれ
	- コードを自動的に最適化するツール（SVGO）

## 参考
[基礎から学ぶ、IllustratorでSVGを最適化して書き出す方法 – WPJ](https://www.webprofessional.jp/crash-course-optimizing-and-exporting-svgs-in-adobe-illustrator/)
[HTML SVG の基本的な使い方 / Web Design Leaves](https://www.webdesignleaves.com/pr/html/svg_basic.html)
[SVGを使うときに知っておくといいことをまとめました \- Qiita](https://qiita.com/manabuyasuda/items/01a76204f97cd73ffc4e)
[Webサイトを遅くするダメなSVG画像をスッキリ最適化する手軽な方法 – WPJ](https://www.webprofessional.jp/three-ways-decreasing-svg-file-size-svgo/)