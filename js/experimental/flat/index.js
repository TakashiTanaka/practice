// 2次元配列
const array1 = [1, [2, 3], 4, [5, 6]];

// 配列に対してflatメソッドを実行
const result1 = array1.flat();

// [ 1, 2, 3, 4, 5, 6 ]
console.log(result1);

// 3次元配列
const array2 = [1, [2, [3, 4]], 5, [6, 7]];

// 配列に対してflatメソッドを実行
const result2 = array2.flat();

// [ 1, 2, [ 3, 4 ], 5, 6, 7 ]
console.log(result2);

// 3次元配列
const array3 = [1, [2, [3, 4]], 5, [6, 7]];

// 配列に対してflatメソッドを実行。深さは2に指定
const result3 = array3.flat(2);

// [1, 2, 3, 4, 5, 6, 7]
console.log(result3);
