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

	$('.zoom-fade')
		.slick({
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			fade: true,
			speed: 2000,
			cssEase: 'ease-in-out', // 画像の切り替わりのイージング設定
		})
		.on({
			// beforeChangeはスライドが移動する前に発生するイベント
			beforeChange(event, slick, currentSlide, nextSlide) {
				// slick-slideはスライド要素に自動的に付与されるclass
				// $(".slick-slide", this)は$('.zoom-fade')内の".slick-slide"要素群を取得している
				$(".slick-slide", this).eq(currentSlide).addClass("prev-slide");
				$(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
				// 現在の番号を確認する用
				// $("#currentNum").text(currentSlide);
				$("#currentNum").text(currentSlide);
				$("#nextNum").text(nextSlide);
				$("#beforeChange").text(currentSlide);
			},
			// afterChangeはスライドが移動した後に発生するイベント
			afterChange(event, slick, currentSlide) {
				$(".prev-slide", this).removeClass("prev-slide slide-animation");
				$("#afterChange").text(currentSlide);
			}
		})
		.find(".slick-slide").eq(0).addClass("slide-animation");
});