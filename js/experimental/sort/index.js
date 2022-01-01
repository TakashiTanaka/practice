// 文字列を格納した配列
const months = ['March', 'Jan', 'Feb', 'Dec'];

// ソートを実行（UTF-16コード単位順でソート）
months.sort();

// ["Dec", "Feb", "Jan", "March"]
console.log(months);

// 数値を格納した配列
const array1 = [1, 30, 4, 21, 100000];

// ソートを実行（UTF-16コード単位順でソート）
array1.sort();

// [1, 100000, 21, 30, 4]
console.log(array1);

// 比較関数を渡してソート
array1.sort((a, b) => a - b);

// [1, 4, 21, 30, 100000]
console.log(array1);

// 数値を格納した配列
const array2 = [1, 30, 4, 21, 100000];

// array2をコピーした上でソート（array2はソートされない）
const array3 = [...array2].sort((a, b) => a - b);

// [1, 100000, 21, 30, 4]
console.log(array2);

// [1, 4, 21, 30, 100000]
console.log(array3);
