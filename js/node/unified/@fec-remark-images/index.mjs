import { remark } from 'remark';
import { read } from 'to-vfile';
import parse from 'remark-parse';
import html from 'remark-html';
import images from '@fec/remark-images';
import path from 'path';

const targetDir = path.join('.', 'img', 'test');

const options = {
  srcDir: path.join('.', 'img'),
  targetDir: targetDir,
};

main();

async function main() {
  const file = await remark()
    .use(parse)
    .use(html)
    .use([[images, options]])
    .use(console.log)
    .process(await read('test.md'));

  console.log(String(file));
}
