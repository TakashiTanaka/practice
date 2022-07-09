import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800,
  height: 800,
  backgroundColor: 0x1099bb,
  // resolution: window.devicePixelRatio || 1,
  antialias: true,
});

document.body.appendChild(app.view);

const bunnys = [];
const totalBunnys = 50;

for (let i = 0; i < totalBunnys; i++) {
  const bunny = PIXI.Sprite.from('bunny.png');

  // bunnyの基点を中央に
  bunny.anchor.set(0.5);

  // bunnyのサイズを設定
  bunny.scale.set(1 + Math.random() * 10);

  bunny.x = Math.random() * app.screen.width;
  bunny.y = Math.random() * app.screen.height;

  // BLEND_MODESをADDに設定
  bunny.blendMode = PIXI.BLEND_MODES.ADD;

  // tintをランダムに設定
  bunny.tint = Math.random() * 0xffffff;

  bunny.direction = Math.random() * Math.PI * 2;

  bunny.turningSpeed = Math.random() - 0.8;

  bunny.speed = 1 + Math.random();

  bunnys.push(bunny);

  app.stage.addChild(bunny);
}

// 境界線として正方形を定義（境界線がカンバスの外側にあるイメージ）
const bunnyBoundsPadding = 200;
const bunnyBounds = new PIXI.Rectangle(
  -bunnyBoundsPadding,
  -bunnyBoundsPadding,
  app.screen.width + bunnyBoundsPadding * 2,
  app.screen.height + bunnyBoundsPadding * 2
);

app.ticker.add(() => {
  bunnys.forEach((bunny, i) => {
    bunny.direction += bunny.turningSpeed * 0.01;
    bunny.x += Math.cos(bunny.direction) * bunny.speed;
    bunny.y += Math.sin(bunny.direction) * bunny.speed;
    bunny.rotation = -bunny.direction - Math.PI / 2;

    // x方向の境界線にぶつかった時の条件分岐
    if (bunny.x < bunnyBounds.x) {
      bunny.x += bunnyBounds.width;
    } else if (bunny.x > bunnyBounds.x + bunnyBounds.width) {
      bunny.x -= bunnyBounds.width;
    }

    // y方向の境界線にぶつかった時の条件分岐
    if (bunny.y < bunnyBounds.y) {
      bunny.y += bunnyBounds.height;
    } else if (bunny.y > bunnyBounds.y + bunnyBounds.height) {
      bunny.y -= bunnyBounds.height;
    }
  });
});
