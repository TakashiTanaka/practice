<?php

// ==========================================================================
// sprintf
// ==========================================================================

// $name = 'apple';
// $score = 32.246;

// $info = "[$name][$score]";
// echo $info . PHP_EOL;

// $info = sprintf("[%15s][%10.2f]", $name, $score);
// echo $info . PHP_EOL;

// $info = sprintf("[%-15s][%010.2f]", $name, $score);
// echo $info . PHP_EOL;

// $info = printf("[%-15s][%010.2f]" . PHP_EOL, $name, $score);

// ==========================================================================
// strlen / trim / strpos / str_replace
// ==========================================================================

// $input = ' my_name ';
// $input = trim($input);

// echo strlen($input) . PHP_EOL;
// echo strpos($input, '_') . PHP_EOL;

// $input = str_replace('_', '-', $input);
// echo $input . PHP_EOL;

// ==========================================================================
// mb_strlen / mb_strpos
// ==========================================================================

// $input = ' こんにちは ';
// $input = trim($input);

// echo mb_strlen($input) . PHP_EOL;
// echo mb_strpos($input, 'に') . PHP_EOL;

// $input = str_replace('にち', 'ばん', $input);
// echo $input . PHP_EOL;

// ==========================================================================
// 固定長データを扱う
// substr / substr_replace / number_format
// ==========================================================================

// $input = '20200320Item-A  1200';
// $input = substr_replace($input, 'Item-B  ', 8, 8);

// $date = substr($input, 0, 8);
// $product = substr($input, 8, 8);
// $amount = substr($input, 16);

// echo $date . PHP_EOL;
// echo $product . PHP_EOL;
// echo $amount . PHP_EOL;

// echo number_format($amount) . PHP_EOL;

// ==========================================================================
// preg_match / preg_match_all / preg_replace
// ==========================================================================

$input = 'Call us at 03-3001-1256 or 03-3015-3222';

// $pattern = '/\d{2}-\d{4}-\d{4}/';
// preg_match_all($pattern, $input, $matches);
// print_r($matches);

// $pattern = '/\d{2}-\d{4}-\d{4}/';
// $input = preg_replace($pattern, '**-****-****', $input);
// echo $input . PHP_EOL;

// ==========================================================================
// implode / explode
// ==========================================================================

// $d = [2020, 11, 15];
// echo implode('-', $d) . PHP_EOL;

// $t = '17:32:45';
// print_r(explode(':', $t));

// ==========================================================================
// ceil / floor / round / mt_rand / max / min / M_PI / M_SQRT2
// ==========================================================================

// $n = 5.62432;

// echo ceil($n) . PHP_EOL; // 小数点以下切り上げ
// echo floor($n) . PHP_EOL; // 小数点以下切り捨て
// echo round($n) . PHP_EOL; // 四捨五入
// echo round($n, 2) . PHP_EOL; // 小数点以下2桁にする指定
// echo mt_rand(1, 6) . PHP_EOL; // ランダムな整数を生成
// echo max(1, 6, 8) . PHP_EOL; // 最大値を返す
// echo min(1, 6, 8) . PHP_EOL; // 最小値を返す
// echo M_PI . PHP_EOL; // 円周率を返す
// echo M_SQRT2 . PHP_EOL; // 2の平方根を返す

// ==========================================================================
// array_unshift / array_push / array_shift / array_pop
// ==========================================================================

// $scores = [30, 40, 50];

// array_unshift($scores, 10, 20); // 先頭に追加
// array_push($scores, 60, 70); // 末尾に追加
// $scores[] = 80; // 末尾に追加
// array_shift($scores); // 先頭を削除
// array_pop($scores); // 末尾を削除

// print_r($scores);

// ==========================================================================
// array_slice
// ==========================================================================

// sliceは新しい配列を作って返す
// $scores = [30, 40, 50, 60, 70];
// $partial = array_slice($scores, 2, 3);
// $partial = array_slice($scores, 2);
// $partial = array_slice($scores, -2); // -で指定すると末尾から数えた位置になる

// print_r($scores);
// print_r($partial);

// ==========================================================================
// array_splice
// ==========================================================================

// spliceは元配列を直接変更する
// 指定した位置から指定した数の要素を削除
// $scores = [30, 40, 50, 60, 70, 80];
// array_splice($scores, 2, 3);

// 削除した位置に挿入
// array_splice($scores, 2, 3, [100, 101]);

// 削除せずに指定した位置に挿入
// array_splice($scores, 2, 0, [100, 101]);

// print_r($scores);

// ==========================================================================
// sort / rsort / shuffle / array_rand
// ==========================================================================

// $scores = [30, 40, 50, 60, 70, 80];

// sort($scores); // 小さい順に並び替える
// print_r($scores);

// shuffle($scores); // ランダムに並び替え（元の配列に変更が加えられるのに注意）
// print_r($scores);

// $picked = array_rand($scores, 2); // 指定した数のランダムなキーを配列で返す
// echo $scores[$picked[0]] . PHP_EOL;
// echo $scores[$picked[1]] . PHP_EOL;

// ==========================================================================
// array_fill / range / array_sum / max / min
// ==========================================================================

// $scores = [30, 40, 50, 60, 70, 80];

// $scores = array_fill(0, 5, 10); // 位置と数と値を指定して、配列を作る
// $scores = range(1, 10); // 指定した値から始まる配列を作る
// $scores = range(1, 10, 2); // 第3引数で刻みの数を決められる
// print_r($scores);

// echo array_sum($scores) . PHP_EOL; // 要素の合計
// echo max($scores) . PHP_EOL; // 要素の最大値
// echo min($scores) . PHP_EOL; // 要素の最小値
// echo array_sum($scores) / count($scores) . PHP_EOL; // 平均

// ==========================================================================
// array_merge / array_unique / array_diff / array_intersect
// ==========================================================================