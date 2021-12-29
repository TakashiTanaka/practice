// 操作対象となる配列を定義
const array = ['one', 'two', 'three', 'four'];

/*
 * forEachで配列内の各要素に対して処理を実行
 * one 0 [ 'one', 'two', 'three', 'four' ]
 * two 1 [ 'one', 'two', 'three', 'four' ]
 * three 2 [ 'one', 'two', 'three', 'four' ]
 * four 3 [ 'one', 'two', 'three', 'four' ]
 */
array.forEach((element, index, array) => console.log(element, index, array));
