// 文字列を定義
const str = '吾輩は猫である';

// 0から2番目の位置までの文字列を切り出す
const str2 = str.slice(0, 2);

// '吾輩'
console.log(str2);

// 0から-3（後ろから3番目）の位置までの文字列を切り出す
const str3 = str.slice(0, -3);

// '吾輩は猫'
console.log(str3);

// 元の文字列は変更されていない
// '吾輩は猫である'
console.log(str);

// 配列を定義
const array = ['坊っちゃん', '三四郎', '心', 'それから'];

// 0から2番目の位置までの要素を切り出す
const array2 = array.slice(0, 2);

// ['坊っちゃん', '三四郎']
console.log(array2);

// 0から-1（後ろから1番目）の位置までの要素を切り出す
const array3 = array.slice(0, -1);

// ['坊っちゃん', '三四郎', '心']
console.log(array3);

// 元の配列は変更されていない
// ['坊っちゃん', '三四郎', '心', 'それから']
console.log(array);
