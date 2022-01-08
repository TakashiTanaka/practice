// 配列を2つ定義
const array1 = [0, 1, 2, 3, 4];
const array2 = ['a', 'b', 'c', 'd', 'e'];

// array1とarray2を結合した配列を取得
const array3 = array1.concat(array2);

// [0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', 'e']
console.log(array3);

// array1とarray2を結合した配列を取得（スプレッド構文を使用）
const array4 = [...array1, ...array2];

// [0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', 'e']
console.log(array4);
