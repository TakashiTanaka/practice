import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ width: 800, height: 800 });
document.body.appendChild(app.view);

// ParticleContainerをインスタンス化
// 大量のスプライトを扱う時に良いっぽい。
const sprites = new PIXI.ParticleContainer(10000, {
  scale: true,
  position: true,
  rotation: true,
  uvs: true,
  alpha: true,
});
app.stage.addChild(sprites);

// create an array to store all the sprites
const bunnys = [];

const totalSprites = app.renderer instanceof PIXI.Renderer ? 10000 : 100;

for (let i = 0; i < totalSprites; i++) {
  const bunny = PIXI.Sprite.from('bunny.png');

  bunny.anchor.set(0.5);

  bunny.scale.set(0.8 + Math.random() * 0.3);

  bunny.x = Math.random() * app.screen.width;
  bunny.y = Math.random() * app.screen.height;

  bunny.direction = Math.random() * Math.PI * 2;

  bunny.turningSpeed = Math.random() - 0.8;

  bunny.speed = (2 + Math.random() * 2) * 0.2;

  bunny.offset = Math.random() * 100;

  bunnys.push(bunny);

  sprites.addChild(bunny);
}

const bunnyBoundsPadding = 100;
const bunnyBounds = new PIXI.Rectangle(
  -bunnyBoundsPadding,
  -bunnyBoundsPadding,
  app.screen.width + bunnyBoundsPadding * 2,
  app.screen.height + bunnyBoundsPadding * 2
);

let tick = 0;

app.ticker.add(() => {
  for (let i = 0; i < bunnys.length; i++) {
    const bunny = bunnys[i];
    bunny.direction += bunny.turningSpeed * 0.01;
    bunny.x += Math.sin(bunny.direction) * (bunny.speed * bunny.scale.y);
    bunny.y += Math.cos(bunny.direction) * (bunny.speed * bunny.scale.y);
    bunny.rotation = -bunny.direction + Math.PI;

    // wrap the bunnys
    if (bunny.x < bunnyBounds.x) {
      bunny.x += bunnyBounds.width;
    } else if (bunny.x > bunnyBounds.x + bunnyBounds.width) {
      bunny.x -= bunnyBounds.width;
    }

    if (bunny.y < bunnyBounds.y) {
      bunny.y += bunnyBounds.height;
    } else if (bunny.y > bunnyBounds.y + bunnyBounds.height) {
      bunny.y -= bunnyBounds.height;
    }
  }

  tick += 0.1;
});
