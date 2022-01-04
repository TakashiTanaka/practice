// 配列をシャッフルする関数（フィッシャーとイェーツの方法）
const shuffle = array => {
  // 受け取った配列をコピー
  const baseArray = [...array];
  // 新しい配列を用意
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    // ランダムな数値（キーとして使用）を取得
    let j = Math.floor(Math.random() * baseArray.length);
    // jをキーとして値を取得
    newArray.push(baseArray[j]);
    // 取得した値を元配列から削除
    baseArray.splice(j, 1);
    // 過程を出力
    console.log(`元: [${baseArray}]  新: [${newArray}]`);
  }
  return newArray;
};

// 配列をシャッフルする関数（ダステンフェルドの方法）
const shuffle2 = array => {
  for (let i = array.length - 1; i > 0; i--) {
    // ランダムな数値（キーとして使用）を取得
    let j = Math.floor(Math.random() * (i + 1));
    // 元配列のi番目と元配列のj番目を入れ替える
    [array[i], array[j]] = [array[j], array[i]];
    // 過程を出力
    console.log(`過程${array.length - i}: [${array}]`);
  }
  return array;
};

// 配列を定義
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// フィッシャーとイェーツの方法
console.log(`結果: [${shuffle(array)}]`);

// ダステンフェルドの方法
console.log(`結果: [${shuffle2(array)}]`);
