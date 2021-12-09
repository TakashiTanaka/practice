/* readdirSyncのテスト */

const fs = require('fs');
const path = require('path');

// 読み込みたいファイルが格納されているディレクトリを取得
const fileDir = path.join(process.cwd(), 'files');

// readdirSyncでディレクトリ内のファイル名を取得
const fileNames = fs.readdirSync(fileDir);

console.log(fileNames); // [ 'test.1.md', 'test.2.md', 'test.3.md', 'test.4.md', 'test.md' ]
