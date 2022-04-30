# case1 公式のGetting startedやってみる

## PixiJSをCDNで読み込み

## PIXI.Applicationをインスタンス化

## DOMにviewを追加

`document.body.appendChild(app.view);`

## 画像を追加

`let sprite = PIXI.Sprite.from('sample.png');`

## 画像をstageに追加

`app.stage.addChild(sprite);`

## アニメーションするためにループを作成

```js
let elapsed = 0.0;
app.ticker.add(delta => {
  elapsed += delta;
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
```

## ローカルサーバーで表示

画像が左右に動いている！！

[デモページ](index.html)

[PixiJS: Getting Started](https://pixijs.io/guides/basics/getting-started.html)
