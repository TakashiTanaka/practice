# フォント指定

## フォント指定の基本
- 前に書いたフォントが優先される
- OSごとに標準フォントが異なる
- 最後に総称フォントの指定をする
- 和文と欧文を混ぜて設定するには欧文フォントを先に指定する

## フォントのリソース
- webフォント, 静的ファイル, 標準フォント
- 静的ファイルを早く読み込ませるにはpreloadを使うと良い。ただ、複数指定すると恩恵が得られないため、ファーストビューで使用されているフォントを読み込むのが良い。

## 日本語フォントを使うときに注意すること
- 日本語フォントは重い
- サブセット化（必要な文字だけ取得して読み込む方法）を使うことである程度は軽減可能
	[こちら](https://www.evoworx.co.jp/blog/pagespeed/)を参考に

## font-displayプロパティ
- CSSのfont-displayプロパティでフォントが読み込まれるまでの間の挙動を制御できる
	5つの値（auto, swap, block, fallback, optional）がある

## いろんな思想
- 欧文はwebフォント、和文は総称フォント
- 欧文は自由、和文は游ゴシックかNoto Fonts

## 約物について
- Yaku Han JPという約物専用のフォントがある
	ゴシック体・明朝体・丸ゴシックの三種、オプションとして約物全てか、カッコのみか
	[Yaku Han JP \- 約物半角専用のWebフォント](https://yakuhanjp.qranoko.jp/)

## OSごとの標準フォント
|OS|font-family|
|--|-----------|
|Win|MS Gothic, MS PGothic,|
|Win & Mac|Meiryo, Meiryo UI|

## 参考
[【2021年版】font\-familyの正しい指定方法とおすすめフォント設定まとめ](https://willcloud.jp/knowhow/font-family/)
[サイトの高速化、軽量化をするために行った事 \| 株式会社 エヴォワークス \-EVOWORX\-](https://www.evoworx.co.jp/blog/pagespeed/)
[2021年、Webフォントの表示を最適化するテクニック \| コリス](https://coliss.com/articles/build-websites/operation/work/optimizing-the-display-of-web-fonts.html)