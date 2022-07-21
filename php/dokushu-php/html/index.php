<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body>
  <h1>練習問題</h1>

  <h2>練習問題3.2</h2>
  <p>[1]</p>
  <?php
  $x = 1;
  $flag = ($x === 1 ? 0 : -1);
  ?>
  <p>[2]</p>
  <p>①true②false③false④false</p>

  <h2>3章の理解度チェック</h2>
  <p>[3]</p>
  <?php
  $error = "";
  echo $error ?: '正常です';
  ?>

  <?php //phpinfo(); 
  ?>

  <h2>PHPからデータベースへの接続</h2>
  <?php
  function getDb(): PDO
  {
    $dns = 'mysql:dbname=selfphp; host=mysql; charset=utf8';
    $usr = 'root';
    $passwd = 'pass';
    $db = new PDO($dns, $usr, $passwd);
    return $db;
  }

  try {
    $db = getDb();
    print '接続成功しました';
  } catch (PDOException $e) {
    die("接続エラー: {$e->getMessage()}");
  } finally {
    $db = null;
  }
  ?>
</body>

</html>