// 年月日をそれぞれ文字型で格納している配列を定義
const date = [2021, 12, 19];

// /で結合
// 2021/12/19
console.log(date.join('/'));

// 引数を省略
// 2021,12,19
console.log(date.join());

// 引数に空文字を渡し、区切り文字無しで結合
// 20211219
console.log(date.join(''));
