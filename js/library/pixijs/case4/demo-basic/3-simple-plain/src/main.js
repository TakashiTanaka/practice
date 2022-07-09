import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800,
  height: 800,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

app.loader.add('bg_bunny', 'test.jpg').load(build);

function build() {
  // Create a new texture
  const texture = app.loader.resources.bg_bunny.texture;
  console.log(texture);
  texture.orig.width = 600;
  texture.orig.height = 600;

  // Create the simple plane
  const verticesX = 200;
  const verticesY = 200;
  const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);

  plane.x = 100;
  plane.y = 100;

  app.stage.addChild(plane);

  // Get the buffer for vertice positions.
  const buffer = plane.geometry.getBuffer('aVertexPosition');

  console.log(buffer);
  // Listen for animate update
  let elapsed = 0;
  app.ticker.add(delta => {
    elapsed += delta;
    // Randomize the vertice positions a bit to create movement.
    for (let i = 0; i < buffer.data.length; i++) {
      // buffer.data[i] += (Math.random() - 0.5) * (i / 1000);
      // buffer.data[i] += (Math.random() - 0.5) * (i / 1000);
      buffer.data[i] += ((Math.random() - 0.5) * 2) / (Math.sin(i) * Math.cos(i)) / 100;
      // buffer.data[i] += Math.sin(elapsed / (10 + i / 1000) + Math.cos(i) / 10);
    }
    buffer.update();
  });
}
