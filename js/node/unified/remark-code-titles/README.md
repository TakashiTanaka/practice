# remark-code-titles

[mottox2/remark\-code\-titles](https://github.com/mottox2/remark-code-titles#readme)

コード文にコードタイトルを付与するプラグイン

## 使用方法

1. Markdownファイルを作成

1. ファイル内にコード文を作成し、下記のようにタイトルを付与する

   ````Markdown
   # Hello World

   ```js:hello.js
   console.log('js')
   ```
   ````

1. JavaScriptファイルを作成
   - サンプルコードのままだと読み込み方法でエラーが出た。ESMで読み込むように変更
   - `package.json`内に`"type": "module",`を追記

   ```js:hello.js
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
      if (err) throw err
      console.log(String(file))
    })
   ```

1. nodeでhello.jsを実行（でうまくいくはずだが上手く行かない・・）
