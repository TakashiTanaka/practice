// 判定対象の文字列
const str1 = 'apple';

// 文字列の先頭が"app"から始まるか判定。trueを返す
console.log(str1.startsWith('app'));

// 文字列の先頭から3番目の位置が"app"から始まるか判定。falseを返す
console.log(str1.startsWith('app', 3));

// 文字列の先頭から3番目の位置が"le"から始まるか判定。trueを返す
console.log(str1.startsWith('le', 3));
