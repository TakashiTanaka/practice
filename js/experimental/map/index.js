// 数値が格納されている配列を定義
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arrayの各要素を2倍にした配列を生成
const array2 = array.map(num => num * 2);

// 元の配列は変更されない
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array);

// 各要素が2倍になった配列
// [2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(array2);
