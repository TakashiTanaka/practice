// 関数をreturnする事で何が良いのか？ => カリー化

// カリー化を利用すると、複数の引数をとる関数を、一つの引数のみを取る複数の関数のラムダ計算などの単純な理論的モデルと見なして研究できるようになる。
// https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%BC%E5%8C%96

// カリー化すると何が嬉しいのか？ => 部分適用された関数（partial application）を作れる

// 普通のsum
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// カリー化
const sum = x => y => x + y;
const add1 = sum(1); // 部分適用された関数 => 『部分的』に実行されていて、期待されてる残りの引数を渡すことで即時実行される関数
console.dir(add1);

// 流れ
// sum = 1 => y => 1 + y; // 1がxに代入される
// y => 1 + y; //この関数が戻る
// (y => 1 + y)(2); // 次にこれが実行される

// console.log((y => 1 + y)(2));

// カリー化
// const sum = x => y => z => x + y + z;
// console.log(sum(1)(2)(3));
