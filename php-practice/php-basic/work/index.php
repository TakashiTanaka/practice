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

  $score = 60;
  $name = 'taguchi';

  // if ($score >= 50) {
  //   if ($name === 'taguchi') {
  //     echo 'Good job!';
  //   }
  // }

  if ($score >= 50 && $name === 'taguchi') {
    echo 'Good job!';
  }

  // ====================================================

  // switch文はjsと同じような感じなのでスキップ

  // ====================================================

  

  ?>
</body>

</html>