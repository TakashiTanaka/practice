<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP基礎文法編</title>
</head>

<body>
  <?php
  // PHP_EOLはブラウザ上では反映されない！！
  // echo 'hello!' . PHP_EOL;
  // echo 'hihi!' . PHP_EOL;

  // ====================================================

  // comment
  # comment
  /*
  複数行のcomment
  複数行のcomment
  複数行のcomment
  */

  // ====================================================

  // 変数代入
  // $name = 'myname';
  // echo $name;

  // ====================================================

  // ""内だったら変数を勝手に展開してくれる
  // echo "my name is $name";

  // ""内で""を使いたい場合は\でエスケープしてあげる
  // echo "my \"name\" is $name";

  // ====================================================

  // nowdoc, heredocを使えば複数行のテキストが楽にかける
  // EOTの所は別に他の識別子でも良い
  // 変数展開できない方がnowdoc, できる方がheredoc
  // $name = 'ぽち';
  // $text = <<<EOT
  // hello!<br>
  // this is $name
  // text!
  // EOT;

  // print $text;

  // ====================================================

  // 四則演算はjsとかと大体同じなのでスキップ

  // ====================================================

  // $a = 'hello'; // string
  // $b = 10; // int
  // $c = -1.3; //float
  // $d = null; // null
  // $e = true; //bool

  // var_dumpで型と値を表示できる
  // var_dump($a);
  // var_dump($b);
  // var_dump($c);
  // var_dump($d);
  // var_dump($e);

  // $a = (float)10;
  // $b = (string)-1.3;

  // var_dump($a);
  // var_dump($b);

  // ====================================================

  // 条件分岐

  // $score = 80;

  // if ($score >= 80) {
  //   echo 'Great';
  // } elseif ($score >= 60) {
  //   echo 'Good';
  // } else {
  //   echo 'OK';
  // }

  // ====================================================

  // 論理演算子

  // $score = 60;
  // $name = 'taguchi';

  // if ($score >= 50) {
  //   if ($name === 'taguchi') {
  //     echo 'Good job!';
  //   }
  // }

  // if ($score >= 50 && $name === 'taguchi') {
  //   echo 'Good job!';
  // }

  // ====================================================

  // switch文はjsと同じような感じなのでスキップ

  // ====================================================

  // 定数宣言方法1
  // define('NAME', 'myname'); // 慣習的に定数は大文字で記述する
  // echo NAME;

  // 定数宣言方法2
  // const NAME = 'myname'

  // ====================================================

  // for文
  // for ($i = 0; $i < 5; $i++) {
  //   echo $i . 'Hello';
  // }

  // ====================================================

  // while文
  // $hp = 100;
  // while ($hp > 0) {
  //   echo "Your HP: $hp";
  //   $hp -= 15;
  // }

  // dowhile文（doブロック内の処理は一度は必ず実行される）
  // $hp = -50;
  // do {
  //   echo "Your HP: $hp";
  //   $hp -= 15;
  // } while ($hp > 0);

  // ====================================================

  // breakやcontinue
  // for ($i = 0; $i < 10; $i++) {
  //   // if ($i === 4) {
  //   //   continue; // continueはスキップ
  //   // }

  //   // if ($i % 3 === 0) {
  //   //   continue;
  //   // }

  //   // if ($i === 4) {
  //   //   break; // breakは処理を抜ける
  //   // }

  //   echo $i;
  // }

  // ====================================================

  // functionはjsと同じ感じなのでスルー

  // ====================================================

  // phpでは関数の外で定義された変数を関数内で使用できない！

  // $rate = 1.1;

  // function sum($a, $b, $c)
  // {
  //   global $rate; // もし関数外で定義された変数を使用したい場合は関数内でglobalというキーワードをつけなきゃだめ
  //   return ($a + $b + $c) * $rate;
  // }

  // echo sum(100, 2000, 300);

  // ====================================================

  // 無名関数
  // 関数を変数に代入すれば、他の関数に引数として渡す事ができたりして便利
  // $sum = function ($a, $b, $c) {
  //   return ($a + $b + $c);
  // };

  // echo $sum(100, 2000, 300);

  // ====================================================

  // 条件演算子はjsと同じ感じ
  // value ? trueの時 : falseの時;

  // ====================================================

  // 型付け
  // 引数の型、返り値の型を指定することができる
  // デフォルトでは弱い型付になっている

  // 強い型付にするにはdeclareで型付チェックの強さを変更する
  // declare(strict_types=1);

  // function showInfo(string $name, int $score): void
  // {
  //   echo $name . ': ' . $score;
  // }

  // showInfo('myname', 50);

  // ====================================================

  // declare(strict_types=1);

  // 型付の前に?をつけるとnullかその型かという指定ができる
  // ただ、intかstringか等の指定はできない
  // function getAward(int $score): ?string
  // {
  //   return $score >= 100 ? 'gold medal' : null;
  // }

  // echo getAward(80);

  // ====================================================

  // 配列
  // $scores = [90, 40, 100]; // 宣言と代入
  // $scores[1] = 60; // 代入
  // echo $scores[1];

  // キーを使う
  // $scores = [
  //   'first' => 90,
  //   'second' => 40,
  //   'third' => 100,
  // ];
  // echo $scores['first'];

  // ====================================================

  // foreach
  // $scores = [
  //   'first' => 90,
  //   'second' => 40,
  //   'third' => 100,
  // ];

  // foreach ($scores as $score) {
  //   echo $score;
  // }

  // foreach ($scores as $key => $score) {
  //   echo $key . ': ' . $score;
  // }

  // ====================================================

  // 配列を別の配列内で展開する

  // $moreScores = [
  //   55,
  //   72,
  // ];

  // $scores = [
  //   90,
  //   40,
  //   ...$moreScores,
  //   100,
  // ];

  // print_r($scores);

  // ====================================================

  // 可変長引数
  // function sum(...$numbers)
  // {
  //   $total = 0;
  //   foreach ($numbers as $number) {
  //     $total += $number;
  //   }

  //   return $total;
  // }

  // ====================================================

  // 配列の返り値
  // function getStats(...$numbers)
  // {
  //   $total = 0;
  //   foreach ($numbers as $number) {
  //     $total += $number;
  //   }

  //   return [$total, $total / count($numbers)];
  // }

  // print_r(getStats(10, 5, 4));

  // jsにおける分割代入的なもの
  // list($num, $average) = getStats(10, 5, 4);
  // [$sum, $average] = getStats(10, 5, 4);


  ?>
</body>

</html>