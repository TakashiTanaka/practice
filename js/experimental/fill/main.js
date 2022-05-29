// 配列内の要素をすべて4に変更
const array1 = [0, 1, 2, 3].fill(4);
console.log(array1);
// [ 4, 4, 4, 4 ]

// 要素数10の配列を作り、要素をすべて'テスト'に変更
const array2 = Array(5).fill('テスト');
console.log(array2);
// [ 'テスト', 'テスト', 'テスト', 'テスト', 'テスト' ]

// インデックスが1の位置から最後まで、すべて4に変更
const array3 = [0, 1, 2, 3].fill(4, 1);
console.log(array3);
// [ 0, 4, 4, 4 ]

// インデックスが1から3の位置まで、すべて4に変更
const array4 = [0, 1, 2, 3].fill(4, 1, 3);
console.log(array4);
// [ 0, 4, 4, 3 ]
