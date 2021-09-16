// Intersection Observerに関する処理
{
	const fixedItemAboveFooter = (footer, item, yOffset = 0) => {

		// footerを定数に代入
		const FOOTER = document.querySelector(footer);

		// topへ戻るボタンを定数に代入
		const EL = document.querySelector(item);

		// itemのデフォルトの位置を取得して定数に代入
		const EL_DEFAULT_BOTTOM_Y = getComputedStyle(EL).bottom;

		// footerの上辺のy座標を取得して返す関数
		const getFooterTopSideY = () => window.innerHeight - FOOTER.getBoundingClientRect().top;

		// itemにfooterの上辺のy座標の値をbottomの値を設定する関数
		const setBottomVal = () => document.querySelector(item).style.bottom = `${getFooterTopSideY() + yOffset + parseInt(EL_DEFAULT_BOTTOM_Y)}px`;

		// IntersectionObserverのcallback関数
		function callback(entries) {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
			})

			// もしfooterがviewportに現れたらsetBottomValをイベントにしたスクロールイベントが発動する
			// もしfooterがviewportから見えなくなったら、スクロールイベントが解除され、元のbottom位置に戻る
			if (entries[0].isIntersecting) {
				addEventListener('scroll', setBottomVal);
			} else {
				removeEventListener('scroll', setBottomVal);
				document.querySelector(item).style.bottom = EL_DEFAULT_BOTTOM_Y;
			}
		}

		const options = {
			rootMargin: `0px 0px ${yOffset}px 0px` //rootにマージンを設定
		}

		// IntersectionObserverのインスタンスを作ってcallback関数を引数に渡し、footerを監視対象にする
		new IntersectionObserver(callback, options).observe(FOOTER);
	}

	// 関数の実行
	fixedItemAboveFooter("#footer", "#item", 0);
}


