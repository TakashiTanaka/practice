// 月を格納した配列
const months = ['Jan', 'March', 'April', 'June'];

// 1番目の位置から1つ削除（Marchを削除）
months.splice(1, 1);

// ['Jan', 'April', 'June']
console.log(months);

// 1番目の位置にFebとMarchを追加
// 第2引数に0を渡しているので削除はされない
months.splice(1, 0, 'Feb', 'March');

// ['Jan', 'Feb', 'March', 'April', 'June']
console.log(months);

// 2番目の位置にあるMarchを削除し、3を代入する
months.splice(2, 1, 3);

// ['Jan', 'Feb', 3, 'April', 'June']
console.log(months);

// 1番目の位置から最後の要素までを削除
// 引数が1つだけだとその位置から最後まで削除される
months.splice(1);

// ['Jan']
console.log(months);
