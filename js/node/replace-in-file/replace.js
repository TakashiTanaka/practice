// replace-in-fileの読み込み
const replace = require('replace-in-file');

/**
 * 文字列の置換を行う関数
 * @param {{ files: string, from: string, to: string }} options 検索オプション
 */
async function run(options) {
  try {
    const results = await replace(options);
    console.log('置換結果:', results);
  } catch (error) {
    console.error('エラー発生:', error);
  }
}

// 関数の実行
run({
  files: './files/*.md',
  from: /変更前/g,
  to: '変更後',
  countMatches: true,
});
