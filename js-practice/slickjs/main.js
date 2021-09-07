$(function () {
	$('.basic').slick({
		autoplay: true, // 自動でスライドするか
		autoplaySpeed: 5000, // 自動スライドのスピード
		dots: true, // ドットナビゲーションを表示するか
	});

	$('.center').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false, // 左右の矢印をつけるかどうか
		dots: true,
		centerMode: true, // センターモード
		centerPadding: '60px', // 前後のパディング
		cssEase: 'ease-in-out', // 画像の切り替わりのイージング設定
	});
});