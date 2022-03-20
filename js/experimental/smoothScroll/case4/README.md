# Case4 JSライブラリ、Smooth Scrollでスクロール

## 使用方法

1. インストール

`npm install smooth-scroll`

2. a要素とスクロール先の要素を用意

```html
<a data-scroll href="#target">下まで飛びます</a>
...
<div id="target">ここまでおいで</div>
```

3. 読み込みと初期化

```js
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');
```

## オプション

```js
{
  speed: 600, // 移動スピード
  header: '#header', // 固定ヘッダーを指定して、スクロール位置を調整
  easing: 'easeInOutQuint', // イージングを指定
}
```

## 問題点

固定ヘッダーにStickyだとなぜかスクロールがトグルの挙動になってしまう

[その他オプションは公式で確認](https://github.com/cferdinandi/smooth-scroll)