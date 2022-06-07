const array = [1, 2, 3, 4, 5];

// 引数が偶数かどうか判定する関数
const even = element => element % 2 === 0;

console.log(array.some(even));
