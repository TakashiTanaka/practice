import { toVFile } from 'to-vfile';
import { unified } from 'unified';
import parse from 'remark-parse';
import codeTitle from 'remark-code-titles';
import html from 'remark-html';

const result = unified()
  .use(parse)
  .use(codeTitle)
  .use(html)
  .process(toVFile.readSync('./hello.md'), (err, file) => {
    if (err) throw err;
    console.log(String(file));
  });
