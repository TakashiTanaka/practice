# Parallax.jsのテスト

1. インストール（CDN、ダウンロード、npm）
1. ライブラリの読み込み
1. 要素を囲むコンテナの作成
1. parallaxさせたい子要素の作成
	containerと同じサイズのlayerを作ってそこに絶対配置のオブジェクトを入れるのが良さそう
1. タグにdata-depthを追加して奥行きを設定する（ただ、これは見た目の奥行きではない。見た目の奥行きを変えたい場合はz-indexを使う必要あり）

[wagerfield/parallax: Parallax Engine that reacts to the orientation of a smart device](https://github.com/wagerfield/parallax)