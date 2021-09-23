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