// obj1を定義
const obj1 = {
  propA: 0,
  propB: 1,
};

// obj1の中身をコピーしたobj2を定義（スプレッド構文を使用）
const obj2 = { ...obj1 };

// どちらも{ propA: 0, propB: 1 }と表示される
console.log(obj1);
console.log(obj2);

// obj2のpropAに5を代入する
obj2.propA = 5;

// obj1は変わらず、obj2は{ propA: 5, propB: 1 }と表示される
console.log(obj1);
console.log(obj2);

// obj1をpropAとpropBという変数に分割代入
const { propA, propB } = obj1;

// 0 1が表示される
console.log(propA, propB);

// obj3を定義
const obj3 = {
  propC: 0,
  propD: 1,
  propE: 2,
  propF: 3,
};

// オブジェクトを引数に取る関数を定義
// 分割代入とレスト構文を組み合わせている例
const print = ({ propC, ...rest }) => {
  // 0
  console.log(propC);

  // { propD: 1, propE: 2, propF: 3 }
  console.log(rest);
};

// print関数を実行
print(obj3);
