# Swiper.jsのテスト

- [case1 基本的な使い方](./case1/index.html)
	シンプルな例
- [case2 フェードで切り替える](./case2/index.html)
	フェードオプションを付けてみる。フェードの速さはspeedで調整する
- [case3 ズームインした後、フェードで切り替え](./case3/index.html)
下記サイトを参考にやってみた
[Swiper\+CSSのみ！ズームアップしながらフェードインで切り替わるスライダーの実装方法 \| WEMO](https://wemo.tech/2961)
- [case4 画像が読み込まれた後にフェードして表示させる](./case4/index.html)
読み込み時にスタイルが崩れることがあったで、画像が読み込まれてからcssで表示されるように調整してみた
- [case5 webpackのstyle-loaderとcss-loaderを使ってバンドルしてみる](./case5/index.html)
CDNじゃなくてnpmを使ってinstallしてみる。webpackを使って、jsでswiperのcssが挿入されるように。style-loaderとcss-loaderを使っている
- [case6 swiperのcssはscss側で読み込み＆cssは別ファイルで書き出す](./case6/index.html)
scss側でswiperのcssを読み込むテスト。また、cssは別ファイルで書き出すために"mini-css-extract-plugin"を使っている。scss側でswiperのcssを読み込むという発想は下記サイトを参考にさせていただいた。
[【webpack】スライドショー「Swiper」を使いたい – expexp\.jp](https://www.expexp.jp/webpack-swiper/)
- [case7 swiperのcssをjsで読み込んで、cssは別ファイルで書き出し](./case7/index.html)
エントリーポイントのjsで自作のscssとswiperのcssを読み込んで、それらをまとめた上でcssに"mini-css-extract-plugin"を使って書き出し
- [case8 横に複数枚並んだ状態でスライド](./case8/index.html)
slidesPerView: 3,spaceBetween: 0,で実現
- [case9 横に複数枚並んだ状態で連続してスライド](./case9/index.html)
下記サイトを参考にさせていただいた。freeMode:true,とonメソッド内でtransitionTimingFunctionをlinearに設定
[\[Swiper\]連続して横方向にゆっくり動くスライダーをswiperでつくる方法\[WordPress\] \| tedate](https://tedate.jp/wp-tips/swiper-horizontal-scroll-continuously)