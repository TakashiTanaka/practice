# モーダルウィンドウ

ドットインストールで紹介されていた、  
モーダルウィンドウを実装しました。

制作物URL  
https://takashitanaka.github.io/practice/js-practice/modalWindow/modalWindow.html

参考URL  
https://dotinstall.com/lessons/modal_js_v3/54101

## 学んだ事

- position: absolute; の時に左右中央揃えにしたい時はleftとrightを0とした上で、margin: 0 auto;とする。
- HTMLの記述順によって要素の重なりを指定するのではなく、z-indexで指定する方が管理しやすい。
- 要素に対して.click();を使用すると、その要素に対して設定されているクリックイベントが発生する（[参考サイト：Mdn](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/click)）
