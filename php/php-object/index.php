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

//----------------------------------------------------

// オブジェクトを使った例

// クラスの定義
// ->はjsでいうところの.と同じ

declare(strict_types=1); // 厳密な型チェック

// 親クラス・スーパークラス
class Post
{
	// プロパティ
	// privateにすることでクラス内のみでしか使えないようになる
	// protectedにすることで子クラスからも使えるようになる
	// publicやprivate、protectedはアクセス修飾子という
	protected string $text; // string型に型付
	private $likes = 0;

	// クラスプロパティ
	// staticをつけることでクラスに紐付いたプロパティにできる
	private static $count = 0;

	// オブジェクト定数
	public const VERSION = 0.1;

	// コンストラクタ
	public function __construct(string $text) // string型に型付
	{
		$this->text = $text;
		self::$count++; // staticをつけたプロパティはself::変数名でアクセスできる。変数名には$必要
	}

	// メソッド
	// オーバーライドを防ぐためにはfinal修飾子をつける
	final public function show()
	{
		printf('%s (%d)' . PHP_EOL, $this->text, $this->likes);
	}

	// プロパティはメソッドを介して操作する
	public function like()
	{
		$this->likes++;

		if ($this->likes > 100) {
			$this->likes = 100;
		}
	}

	// クラスメソッド
	public static function showInfo()
	{
		printf('Count: %d' . PHP_EOL, self::$count);
		printf('Version: %.1f' . PHP_EOL, self::VERSION);
	}
}

// Postを継承したSponsoredPostクラス
// 子クラス・サブクラス
class SponsoredPost extends Post
{
	private $sponsor;

	public function __construct($text, $sponsor)
	{
		parent::__construct($text); // 親クラスのコンストラクタを使う
		$this->sponsor = $sponsor;
	}

	public function showSponsor()
	{
		printf('%s' . PHP_EOL, $this->sponsor);
	}

	// メソッドのオーバーライド
	public function show()
	{
		printf('%s by %s' . PHP_EOL, $this->text, $this->sponsor);
	}
}

$posts = [];
$posts[0] = new Post('hello'); // インスタンスの生成
// $posts[0]->text = 'hello';
// $posts[0]->likes = 0;
$posts[1] = new Post('hello again');
// $posts[1]->text = 'hello again';
// $posts[1]->likes = 0;

$posts[2] = new SponsoredPost('hello hello', 'apple inc');

$posts[0]->like();

$posts[0]->show();
$posts[1]->show();
$posts[2]->show();
$posts[2]->showSponsor();

Post::showInfo(); // Post::でstaticのメソッドやプロパティを呼び出せる（publicの場合）
