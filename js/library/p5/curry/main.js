// カリー化の例
const _rect = x => y => size => rect(x, y, size);

// 部分適用の例1
const drawRectOriginCenter = _rect(1000 / 2)(1000 / 2);

// 例1はこういう書き方もできるはず
// const drawRectOriginCenter = size =>_rect(1000 / 2)(1000 / 2)(size);

// 部分適用の例2
const draw100pxRect = x => y => _rect(x)(y)(100);

function setup() {
  createCanvas(1000, 1000);
  background(0);
  fill(255);

  // 普通のrectで描写
  text('普通のrectで描写', 100, 230);
  rect(#ffffff);

  // カリー化したrectで描写
  text('カリー化したrectで描写', 300, 230);
  _rect(300)(100)(100);

  // 原点がcanvasの中央（x=500,y=500）に部分適用した関数で描写
  text('原点がcanvasの中央（x=500,y=500）に部分適用した関数で描写', 1000 / 2, 1000 / 2 + 130);
  drawRectOriginCenter(100);

  // サイズが100pxのrectをx=500,y=100の位置に描写
  text('サイズが100pxのrectをx=500,y=100の位置に描写', 500, 230);
  draw100pxRect(500)(100);
}
