import { toVFile } from 'to-vfile';
import { remark } from 'remark';
import parse from 'remark-parse';
import codeTitle from 'remark-code-titles';
import html from 'remark-html';

const result = remark()
  .use(parse)
  .use(codeTitle)
  .use(html, { sanitize: false })
  .process(toVFile.readSync('./hello.md'), (err, file) => {
    if (err) throw err;
    console.log(String(file));
  });
