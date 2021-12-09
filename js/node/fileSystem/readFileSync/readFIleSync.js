/* readFileSyncのテスト */

const fs = require('fs');
const path = require('path');

// 読み込みたいファイルが格納されているディレクトリを取得
const fileDir = path.join(process.cwd(), 'files');

// readdirSyncでディレクトリ内のファイル名を配列で取得
const fileNames = fs.readdirSync(fileDir);

// fileNamesに対してmapで各ファイルを操作する
fileNames.map(fileName => {
  /** 各ファイルへのフルパス @type {string} */
  const fullPath = path.join(fileDir, fileName);

  /** 各ファイルの内容 @type {string} */
  const content = fs.readFileSync(fullPath, 'utf-8');

  console.log(content);
  /* 	
			# テストファイルです

			本文です。ファイルの内容は表示されましたか？
 	*/
});
