// 様々な値を取得して、dom要素内にその値を代入する処理
{
	const FOOTER = document.getElementById('footer');

	// footerの高さを取得
	let footerHeight = FOOTER.clientHeight;
	document.getElementById('footer-height').innerText = footerHeight;

	// footerの位置座標情報を取得
	let footerBounding = FOOTER.getBoundingClientRect();
	let windowTopToFooterTop = footerBounding.top;
	document.getElementById('window-top-to-footer-top').innerText = windowTopToFooterTop;

	// windowの高さを取得
	document.getElementById('window-height').innerText = window.innerHeight;

	// スクロール量を取得
	document.getElementById('scroll-y').innerText = window.scrollY;

	// body（ドキュメント全体）の高さを取得
	document.getElementById('body-height').innerText = document.querySelector('body').clientHeight


	// resize時にwindowの高さを再取得
	window.addEventListener('resize', () => {
		document.getElementById('window-height').innerText = window.innerHeight;
	});

	window.addEventListener('scroll', () => {
		// scroll時にy軸のスクロール量を再取得
		document.getElementById('scroll-y').innerText = window.scrollY;

		// footerの位置座標情報を再取得
		let footerBounding = FOOTER.getBoundingClientRect();
		let windowTopToFooterTop = footerBounding.top;
		document.getElementById('window-top-to-footer-top').innerText = windowTopToFooterTop;
	});
}