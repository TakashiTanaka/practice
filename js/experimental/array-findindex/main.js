const array1 = [10, 6, 8, 24, 38];

/* 引数が13より大きい値がどうかテストする関数 */
const isLargeNumber = element => element > 13;

console.log(array1.findIndex(isLargeNumber));
// 3（24は13より大きい。そのため24の位置である3が返ってくる）
