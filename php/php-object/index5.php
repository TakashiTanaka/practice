<?php

class Post
{
	private $text;

	function __construct($text)
	{
		if (strlen($text <= 3)) {
			// 例外を投げる
			throw new Exception('text too short!');
		}
		$this->text = $text;
	}

	public function show()
	{
		printf('%s' . PHP_EOL, $this->text);
	}
}

// 例外処置
// 例外が起きる可能性がある処理をtryに入れる
try {
	$posts[0] = new Post('!');
	$posts[1] = new Post('hello again');

	foreach ($posts as $post) {
		$post->show();
	}
} catch (Exception $e) {
	// 例外が起きた場合の処理をcatchに入れる
	echo $e->getMessage() . PHP_EOL;
}
