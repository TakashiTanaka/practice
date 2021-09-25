<?php

// 名前空間の定義
namespace MyVendor\MyPHPApp;

class Post
{
	private $text;

	function __construct($text)
	{
		$this->text = $text;
	}

	public function show()
	{
		printf('%s' . PHP_EOL, $this->text);
	}
}
