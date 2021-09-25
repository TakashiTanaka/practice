<?php

// use MyVendor\MyPHPApp as MyPHPApp;
use MyVendor\MyPHPApp; // 名前空間の読み込み

require('Post.php');

// 名前空間を作っていない同名のクラスを定義するとエラーになる
class Post
{
}

$posts[0] = new MyPHPApp\Post('hello');
$posts[1] = new MyPHPApp\Post('hello again');

foreach ($posts as $post) {
	$post->show();
}
