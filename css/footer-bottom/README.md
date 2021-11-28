# footerを下部に固定するテスト

- [Case 1 absoluteとbottomを使った方法](./case1.html)
	この方法はfooterに高さが指定されていないとだめ
	参考：[CSSでフッターをウィンドウ最下部に固定する方法【初心者向け】 \| TechAcademyマガジン](https://techacademy.jp/magazine/19410)

- [Case 2 flexboxを使った方法](./case2.html)
	この方法はfooterが高さ可変でもOK
	参考：[CSSでコンテンツが少なくてもフッターをウィンドウ下部に表示する方法 \- NxWorld](https://www.nxworld.net/css-sticky-footer.html)

- [Case 3 fixedを使った方法](./case3.html)
	逆にどんな状況でも常に最下部に表示してしまう

- [Case 4 jQueryを使った方法](./case4/index.html)
	1. ブラウザの高さとブラウザの上辺からfooterの上辺までの距離 + footerの高さを比較する
	1. もしブラウザの高さがブラウザの上辺からfooterの上辺までの距離 + footerの高さよりも高かったら処理を実行する
	1. 処理の内容はfooterのpositionをfixedに、topをwindow.innerHeight - footerの高さに設定する
	参考:[footerを下部に固定する方法！【jQueryやjsライブラリ使用】 \| ウェブカツ公式BLOG](https://webukatu.com/wordpress/blog/10854/#jQuery)

- [Case 5 JavaScriptを使った方法](./case5/index.html)
仕組み的にはjQueryと同じ