# JSDocを利用する

## JSDocとは

関数や変数の宣言の直前に/** ○○ **/でコメントを書く記法の事

## メリット

- エディターの機能でコードヒントやコード補完が表示される
- 他のエンジニアや未来の自分がコードを読み取りやすくなる

## 書き方

/** ○○ **/の中に@type{型}や@param{型}といった型情報と共にコメントを残す

```JavaScript
/**
 * 年齢を表す数値です。
 * @type {number}
 */
let myAge = 30;

/**
 * 引数で与えた文字列をそのまま返します
 * @param {string} msg 返す文字列です。
 * @return {string}
 */
function returnMsg(msg) {
  return msg;
}
```

## VSCodeでDocument Thisを使う

VS CodeのDocument Thisという拡張機能を利用すると、
JSDocのフォーマットを生成できるようになる。

1. 拡張機能「Document This」をインストール
2. JSDocを作成したい関数にカーソルを合わせ、⌃ + ⌥ + Dを2回実行すると生成される

## 参考

- [JavaScriptでJSDocコメントを書くメリットとは \- ICS MEDIA](https://ics.media/entry/6789/)
- [JSDocコメント \- Google JavaScript スタイルガイド \- 日本語訳 \- atwiki（アットウィキ）](https://w.atwiki.jp/aias-jsstyleguide2/pages/14.html)
- [VSCodeでJavaScriptのドキュメンテーションコメント\(JSDoc\)を自動生成する \- 中安拓也のブログ](https://www.l08084.com/entry/2018/02/08/152644)
