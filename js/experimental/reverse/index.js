// 操作対象となる配列を定義
const array = ['one', 'two', 'three', 'four'];

// reverseメソッドで要素の順序を反転
const reverseArray = array.reverse();

// [ 'four', 'three', 'two', 'one' ]
console.log(reverseArray);

// 元の配列も変更されてしまっている。。
// [ 'four', 'three', 'two', 'one' ]
console.log(array);

// 再度、操作対象となる配列を定義
const array2 = ['one', 'two', 'three', 'four'];

// array2の中身を新たな配列にコピーした上で
// reverseメソッドで要素の順序を反転
const reverseArray2 = [...array2].reverse();

// [ 'four', 'three', 'two', 'one' ]
console.log(reverseArray2);

// 元の配列は変更されていない
// [ 'one', 'two', 'three', 'four' ]
console.log(array2);
