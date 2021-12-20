// 数値に単位がついている文字列
const num = '10px';

// 数値のみを取得（第2引数省略）
const parseNum1 = parseInt(num);

// 10
console.log(parseNum1);

// 第2引数に基数2を渡す（2進数として読みとる）
const parseNum2 = parseInt(num, 2);

// 2（2進数で10は2）
console.log(parseNum2);

// 0xから始まる16進数の数値を表現している文字列
const num2 = '0xFpx';

// 0xから始まる文字列は自動的に16進数と解釈される
const parseNum3 = parseInt(num2);

// 15（16進数で0xFは15）
console.log(parseNum3);
