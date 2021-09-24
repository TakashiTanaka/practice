<?php

// オブジェクトを使わない例

// $posts = [];
// $posts[0] = ['text' => 'hello', 'like' => 0];
// $posts[1] = ['text' => 'hello again', 'like' => 0];

// function show($post)
// {
// 	printf('%s (%d)' . PHP_EOL, $post['text'], $post['likes']);
// }

// show($posts[0]);
// show($posts[1]);

// クラスの定義
class Post
{
	// プロパティ
	public $text;
	public $likes;

	// メソッド
	public function show()
	{
		printf('%s (%d)' . PHP_EOL, $this->text, $this->likes);
	}
}
