<?php
require __DIR__ . '/vendor/autoload.php';

use \Monolog\Logger;
use \Monolog\Handler\StreamHandler;

// ロガー作成
$logger = new Logger('sample');
$logger->pushHandler(new StreamHandler('logs/sample.log', Logger::INFO));

try {
	// INFOログ出力
	$logger->info('情報ログ');

	// 例外発生
	throw new RuntimeException('ランタイム例外が発生しました。');
} catch (RuntimeException $e) {
	// ERRORログ出力
	$logger->error($e->getMessage());
}
