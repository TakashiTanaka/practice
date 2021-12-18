# remark-htmlのテスト

```JavaScript
import { read } from 'to-vfile';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import parse from 'remark-parse';

main();

async function main() {
  const file = await remark()
    .use(parse)
    .use(remarkHtml)
    .process(await read('test.md'));

  console.log(String(file));
}
```

[remark\-html \- npm](https://www.npmjs.com/package/remark-html)