// 操作対象となる数値
const num = 7.5;

// ceilは引数として与えた数以上の最小の整数を返す
const ceilNum = Math.ceil(num);

// ceilNumは8
console.log(`ceilNumは${ceilNum}`);

// floorは与えた数値以下の最大の整数を返す
const floorNum = Math.floor(num);

// floorNumは7
console.log(`floorNumは${floorNum}`);

// roundは与えた数値を四捨五入した整数を返す
const roundNum = Math.round(num);

// roundNumは8
console.log(`roundNumは${roundNum}`);

// truncは与えた数値の小数部の桁を取り除いた整数を返す
const truncNum = Math.trunc(num);

// truncNumは7
console.log(`truncNumは${truncNum}`);
