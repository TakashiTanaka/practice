<?php

declare(strict_types=1);

// トレイトの定義
// トレイトを使うことで共通のプロパティやメソッドを使用したい所でuseすることができる
// トレイトは型ではないので、クラスの継承やインターフェイスとは違い、同じ型として扱うことができるわけではない
trait LikeTrait
{
	private $likes = 0;

	public function like()
	{
		$this->likes++;
	}
}

// likeメソッドを持ったインターフェイス
// このインターフェイスをimplementsしたクラスはlikeメソッドを持たないといけなくなる
// また、このインターフェイスをimplementsしたクラスはLikeInterFace型を継承することになる
interface LikeInterFace
{
	public function like();
}

// 抽象クラス
// 抽象クラスはそれ自体からはインスタンスを作ることができない、継承を前提としたクラス
// 子クラスに対して、定義を強制したいというルールを作ることができる
// この例でいくと、showメソッドを子クラスで定義しないとエラーになる
// PHPではクラスが複数の親クラスを継承することはできないその場合、インターフェイスという仕組みを使う
abstract class BasePost
{
	protected string $text;
	public function __construct(string $text)
	{
		$this->text = $text;
	}

	// 抽象メソッド
	abstract public function show();
}

// 抽象クラスを継承、LikeInterFaceを実装
class Post extends BasePost implements LikeInterFace
{
	use LikeTrait; // traitを使いたい時はuse

	public function show()
	{
		printf('%s (%d)' . PHP_EOL, $this->text, $this->likes);
	}
}

class SponsoredPost extends BasePost
{
	private $sponsor;

	public function __construct($text, $sponsor)
	{
		parent::__construct($text);
		$this->sponsor = $sponsor;
	}

	public function show()
	{
		printf('%s by %s' . PHP_EOL, $this->text, $this->sponsor);
	}
}

class PremiumPost extends BasePost implements LikeInterFace
{
	use LikeTrait;

	private $price;

	public function __construct($text, $price)
	{
		parent::__construct($text);
		$this->price = $price;
	}

	public function show()
	{
		printf('%s (%d) [%d JPY]' . PHP_EOL, $this->text,  $this->likes, $this->price);
	}
}

$posts = [];
$posts[0] = new Post('hello');
$posts[1] = new Post('hello again');
$posts[2] = new SponsoredPost('hello hello', 'apple inc');
$posts[3] = new PremiumPost('hello there', '300');

// LikeInterFace型を持ったインスタンスを引数に受け付ける関数
function processLikeable(LikeInterFace $likeable)
{
	$likeable->like();
}

processLikeable($posts[0]);
processLikeable($posts[3]);

// BasePost型のpostのみを受け取る関数
function processPost(BasePost $post)
{
	$post->show();
}

// processPostを使って$postsを処理する
foreach ($posts as $post) {
	processPost($post);
}
