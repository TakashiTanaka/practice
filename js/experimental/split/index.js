// 対象となる文字列を定義
const time = '17:08:21';

// 引数を指定せずに実行
// ['17:08:21']
console.log(time.split());

// :で分割して取得
// ['17', '08', '21']
console.log(time.split(':'));

// すべての文字列を分割して取得
// ['1', '7', ':', '0', '8', ':', '2', '1']
console.log(time.split(''));

// カンマ区切りで列挙された文字列を定義
const bandNames = 'Sex Pistols, The Clash, The Damned, Buzzcocks';

// 各バンド名を取得
// カンマの後に1つ以上のスペースで分割
// [ 'Sex Pistols', 'The Clash', 'The Damned', 'Buzzcocks' ]
console.log(bandNames.split(/,\s*/));
