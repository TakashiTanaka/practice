# Replace in file

ファイル内の文字列を検索置換するライブラリ

[replace\-in\-file \- npm](https://www.npmjs.com/package/replace-in-file)

## 使用方法

1. インストール
   `npm i replace-in-file`

1. 読み込みとoptionの記述

   ```JavaScript:replace.js
   const replace = require('replace-in-file');
   const options = {
     files: 'path/to/file',
     from: /foo/g,
     to: 'bar',
   };
   ```

1. 処理を記述（async / awaitを使う方法）

   ```JavaScript:replace.js
   try {
     const results = await replace(option);
     console.log('結果です', results);
   }
   catch(error) {
     condole.log('エラーが起こりました', error);
   }
   ```

