import { read } from 'to-vfile';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import parse from 'remark-parse';
import unwrap from 'remark-unwrap-images';

main();

async function main() {
  const file = await remark()
    .use(parse)
    .use(unwrap)
    .use(remarkHtml)
    .process(await read('test.md'));

  console.log(String(file));
}

/*
 * 実行結果
 * <h1>テストです</h1>
 * <img src="./sky.jpg" alt="hi">
 */
