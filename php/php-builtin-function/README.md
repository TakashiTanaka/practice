# PHPビルトイン関数編

ドットインストールで紹介されていた、  
PHPビルトイン関数編を実践しました。

## 参考URL  
https://dotinstall.com/lessons/basic_php_functions

## そもそもビルトイン関数とは
ビルトイン関数とは予め用意してくれている関数のこと

## sprintf
フォーマットを指定して文字列を作る
[PHP: sprintf \- Manual](https://www.php.net/manual/ja/function.sprintf.php)

## strlen / mb_strlen
文字数を返す。マルチバイト文字列の場合`mb_`をつける

## trim
前後の空白を削除

## strpos / mb_strpos
指定した文字を文字列内から探し、0から数えた位置を返す。マルチバイト文字列の場合`mb_`をつける

## str_replace
指定した文字を置換する

## substr
文字列に対して、範囲を指定して文字列を取得

## substr_replace
文字列に対して、範囲を指定して文字列を置換

## number_format
数値をカンマ区切りの文字列に変換する

## preg_match
文字列に対して、正規表現で最初にマッチする文字列を取得し、配列で返す

## preg_match_all
文字列に対して、正規表現でマッチする全ての文字列を取得し、配列で返す

## preg_replace
文字列に対して、正規表現にマッチした文字列を指定した文字列で置換して、文字型で返す

## implode
配列に対して、指定した区切り文字で連結して、文字型で返す
`implode(区切り文字, 配列)`

## explode
implodeの逆で、文字列に対して、指定した区切り文字で区切って配列に変換して、配列を返す
`explode(区切り文字, 文字列)`

## ceil
小数点以下切り上げ

## floor
小数点以下切り捨て

## round
四捨五入。第2引数に整数値を渡すと、小数点以下の数を指定できる

## mt_rand
ランダムな整数を生成

## max
最大値を返す

## min
最小値を返す

## M_PI
円周率を返す

## M_SQRT2
2の平方根を返す